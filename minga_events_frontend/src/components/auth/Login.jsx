import React from "react";
import "../../styles/login.css";
import GoogleButton from "./GoogleButton";

function Login() {
  return (
    <div className="login_container">
      <video autoPlay muted loop id="retro_tv" alt="retro tv">
        <source src={"/videos/retrotv.mp4"} type="video/mp4" />
      </video>
      <div className="social_button">
        <div className="inputs">
        <h2 className="title">Login</h2>
        <div className="logform">
        <input type="text" id="input_email" placeholder="Email"/>
          <input type="password" id="input_password" placeholder="Password" />
          <br />
          <br />
          <div>
          <button className="logbtn effect">Log in</button>
          </div>
          <br />
          <GoogleButton />
        </div>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
