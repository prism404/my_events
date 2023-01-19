import React from "react";
import "../../styles/login.css";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

function GoogleButton() {
  const [user, setUser] = useState({});
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "875559760166-7bonrhebttrqk5u73h9nocoevhhp1m1e.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);
  return (
    <div>
      <div id="signInDiv"></div>
      {/* {user && 
        <div>
          <img src={user.picture} />
          <h3>{user.given_name}</h3>
        </div>
      } */}
    </div>
  );
}

export default GoogleButton;
