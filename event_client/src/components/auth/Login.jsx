import React, { useEffect, useState } from "react";
import "../../styles/login.css";
import { GoogleButton } from "react-google-button";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "./config";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        setError(true);
      });
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
          <form onSubmit={handleLogin}>
            <div className="logform">
              <input
                type="email"
                id="input_email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                id="input_password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="logbtn">Login</button>
              { error && <span>Wrong email or password</span> }
            </div>
          </form>
          <div id="google_icon">
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
