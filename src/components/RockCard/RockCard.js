import React from "react";
import "./RockCard.css";

const RockCard = props => (
  <div className="card" onClick={props.rockClick}>
    <div className="img-container">
      <img alt={props.image} src={require("../../Images/" + props.image)} />
    </div>
  </div>
);

export default RockCard;
