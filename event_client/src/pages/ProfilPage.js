import React from "react";
import "../styles/profil.css";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function ProfilPage() {
  const { user } = UserAuth();

  return (
    <div className="main_profil">
      <div className="profil_container">
        <div className="avatar_container">
          <img
            src={user.photoURL}
            alt="default avatar"
            className="avatar"
          />
        </div>

        <div className="informations_container">
          <div className="flagrant">
            <h3>{user?.displayName}</h3>
            <div className="about_me">
              <p>Présentation </p>
              <img src="/img/edit.png" alt="" id="edit_icon" />
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </div>

      <div className="outings_container">
        <h3 id="title_list">Liste des sorties</h3>
        <ul className="outings_list">
          <li className="outing_element"><Link to="outing/:id">Outing 1</Link></li>
          <li className="outing_element">Outing 2</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfilPage;
