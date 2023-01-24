import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { UserAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar_container">
        <Link to="/" className="link">
          <h3>CROWDED</h3>
        </Link>
        <div className="navbar_right_content">
          <Link to="/profil" className="link right_content_link">
            <h4>Profil</h4>
          </Link>
          | 
          {user?.displayName ? (
            <button className="logout_btn" onClick={handleSignOut}> Logout
            </button>
          ) : (
            <Link to="/login"> Login </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
