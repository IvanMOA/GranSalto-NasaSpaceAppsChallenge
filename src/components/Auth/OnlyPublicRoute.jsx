import React from "react";
import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "./FirebaseAuthProvider";

export function OnlyPublicRoute({ path, exact, redirectTo, children }) {
  const currentUser = useContext(AuthContext);

  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        !currentUser ? children : <Redirect to={redirectTo} />
      }
    />
  );
}
