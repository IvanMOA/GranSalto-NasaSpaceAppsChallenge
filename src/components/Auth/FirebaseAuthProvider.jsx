import React, { createContext, useEffect, useState } from "react";
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";
import { auth } from "../../firebase";
import { extractEmployeeIdFromEmail } from "../../utilities/extractEmployeeIdFromEmail";
import { getUserByEmployeeId } from "../../services/usersApi";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userFromDb = await getUserByEmployeeId(
          extractEmployeeIdFromEmail(user.email)
        );
        user = {
          ...user,
          ...userFromDb,
        };
      }
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
