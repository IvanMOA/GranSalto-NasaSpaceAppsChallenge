import React, { createContext, useEffect, useState } from "react";
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";
import { auth } from "../../firebase";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);
  if (pending) {
    return <LoadingScreen />;
  }
  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
}
