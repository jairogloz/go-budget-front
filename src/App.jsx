import { useEffect, useState } from "react";
import "./App.css";
import { supabase } from "./lib/helper/supabaseClient";
import TransactionsPage from "./pages/TransactionsPage/TransactionsPage";

function App() {
  const [user, setUser] = useState(null);
  const login = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };
  const logout = () => {
    supabase.auth.signOut();
    setUser(null);
  };

  // Use effect to handle authentication changes
  useEffect(() => {
    // Check if there is an active session when the app loads
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (data?.session) {
        setUser(data.session.user);
      }
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("Auth event:", event);
        if (event === "SIGNED_IN") {
          setUser(session?.user);
        }
        if (event === "SIGNED_OUT") {
          setUser(null);
        }
      }
    );
    return () => {
      authListener?.subscription.unsubscribe();
    };
  });
  return (
    <div className="app-container">
      {user ? (
        <>
          <button onClick={logout}>Logout</button>
          <TransactionsPage />
        </>
      ) : (
        <button onClick={login}>Login with Google</button>
      )}
    </div>
  );
}

export default App;
