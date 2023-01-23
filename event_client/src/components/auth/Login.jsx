import React, { useEffect } from "react";
import "../../styles/login.css";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
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
    <div className="login_container">
      <video autoPlay muted loop id="retro_tv" alt="retro tv">
        <source src={"/videos/retrotv.mp4"} type="video/mp4" />
      </video>
      <div className="social_button">
        <div className="inputs">
          <h2 className="title">Login</h2>
          <div className="logform">
          <div id="google_icon">
              <GoogleButton onClick={handleGoogleSignIn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
