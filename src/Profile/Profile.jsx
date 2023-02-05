import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
  return (
    <div>
      {props.children}
      <h1 style={{ color: "red", fontFamily: "monospace" }}>
        {props.fullname}
      </h1>
      <p style={{ fontFamily: "Arial", color: "black" }}>{props.bio}</p>
      <p>{props.profession}</p>
      <button
        onClick={() => {
          props.HandleName(props.fullname);
        }}
      >
        {" "}
        Show My Name{" "}
      </button>
    </div>
  );
}
Profile.defaultProps = {
  fullname: "Mejri Feriel",
};

Profile.protoTypes = {
  fullname: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default Profile;
