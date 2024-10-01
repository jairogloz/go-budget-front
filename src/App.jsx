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
  };
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("Auth event:", event);
        if (event === "SIGNED_IN") {
          console.log("Session: ", session);
          console.log("User info:", session?.user);
          setUser(session?.user);
        }
        if (event === "SIGNED_OUT") {
          console.log("User signed out");
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
