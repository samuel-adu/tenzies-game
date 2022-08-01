import React from "react";
function Die(props) {
  const backgroundColor = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <div className="die-face" style={backgroundColor} onClick={props.holdDice}>
      <h2 className="die-number">{props.value}</h2>
    </div>
  );
}

export default Die;
