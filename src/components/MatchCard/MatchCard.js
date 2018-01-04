import React from "react";
import "./MatchCards.css";

const MatchCard = props => (
	<div onClick={() => props.setClicked(props.id)} className="card">
		<div className="img-container">
      		<img alt={props.image} src={require("../../Images/" + props.image)} />
    	</div>
  </div>
);

export default MatchCard;
