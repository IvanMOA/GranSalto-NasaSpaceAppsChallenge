import React, { useContext } from "react";
import { AuthContext } from "../../components";
import { extractEmployeeIdFromEmail } from "../../utilities/extractEmployeeIdFromEmail";
import LogoutIcon from "@heroicons/react/solid/LogoutIcon";
import { auth } from "../../firebase";
import { upperCaseFirstLetter } from "../../utilities/upperCaseFirstLetter";

export function LogsFeedLayout() {
  const user = useContext(AuthContext);
  function logout() {
    auth.signOut();
  }
  return (
    <div className="logsfeed-layout h-100 w-100 bg-primary text-white pt-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <p className="m-0">
            Welcome to{" "}
            {user?.role === "astronaut" ? "your log!" : "the astronaut's logs!"}
          </p>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{
              background: "#222222",
              paddingLeft: "1em",
            }}
          >
            <p className="m-0">
              {upperCaseFirstLetter(user?.role)} id:{" "}
              {extractEmployeeIdFromEmail(user.email)}
            </p>
            <button
              onClick={logout}
              style={{ background: "#121212", paddingRight: "1em" }}
              className="btn logout-btn text-white ms-4"
            >
              <LogoutIcon style={{ width: "20px" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
