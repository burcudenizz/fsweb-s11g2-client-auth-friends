import React from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function Logout() {
  let location = useLocation();
  useEffect(() => {}, [location]);

  const history = useHistory();

  let loggedInToken = localStorage.getItem("token");

  const triggerLogout = (e) => {
    console.log("logout butonuna basıldı");
    localStorage.removeItem("token");
    history.push("/login");
  };
  return (
    <div>
      <span>
        {loggedInToken === null ? (
          ""
        ) : (
          <button onClick={triggerLogout}>Logout</button>
        )}
      </span>
    </div>
  );
}
