import React, { useEffect } from "react";
import "../../styles/login.css";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";

function LoginWithFirebase() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/profil");
    }
  }, [user]);

  return (
    <div>
      <div id="google_icon">
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
}

export default LoginWithFirebase;
