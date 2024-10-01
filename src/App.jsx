import { useEffect, useState } from "react";
import "./App.css";
import { supabase } from "./lib/helper/supabaseClient";
import TransactionsPage from "./pages/TransactionsPage/TransactionsPage";
import { useSession } from "./context/SessionContext";

function App() {
  const sessionCtx = useSession();

  const login = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };
  const logout = () => {
    supabase.auth.signOut();
    console.log("session:", sessionCtx);
  };

  return (
    <div className="app-container">
      {sessionCtx.session ? (
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
