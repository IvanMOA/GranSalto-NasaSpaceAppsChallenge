import React, { useContext } from "react";
import { AuthContext } from "../../components";
import { extractAstronautIdFromEmail } from "../../utilities/extractAstronautIdFromEmail";
import LogoutIcon from "@heroicons/react/solid/LogoutIcon";
import { auth } from "../../firebase";

export function LogsFeedLayout() {
  const user = useContext(AuthContext);
  function logout() {
    auth.signOut();
  }
  return (
    <div className="logsfeed-layout h-100 w-100 bg-dark text-white pt-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <p className="m-0">Welcome to your log!</p>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{
              background: "#333333",
              paddingLeft: "1em",
              // paddingRight: "1em",
            }}
          >
            <p className="m-0">
              Astronaut id: {extractAstronautIdFromEmail(user.email)}
            </p>
            <button
              onClick={logout}
              style={{ background: "#444444", paddingRight: "1em" }}
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
