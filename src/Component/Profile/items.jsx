import React from "react";
import "./style.css";
import PropTypes from "prop-types";

function Items({ fullname, bio, profession, children }) {
  return (
    <div className="profileone">
      <div className="item">
        <h1>{fullname}</h1>
        <p> {bio} </p>
        <h3> {profession}</h3>
        {children}
      </div>
    </div>
  );
}

Items.defaultProps = {
  fullname: ".....",
};

Items.propTypes = {
  fullname: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
export default Items;
