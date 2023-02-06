import React from "react";
import "./Component/Profile/style.css";
import Items from "./Component/Profile/Items.jsx";

function Profile({ data, handleName }) {
  return (
    <div className="Profile">
      {handleName("feriel")}
      {data.map((elt, index) => (
        <Items {...elt} key={index}>
          <img src="ProfilePhoto.jpg" alt="" />
        </Items>
      ))}
    </div>
  );
}

export default Profile;
