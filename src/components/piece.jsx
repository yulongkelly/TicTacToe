import React from "react";

export default function Piece(props) {
  return (
    <div className="piece" onClick={props.onClick}>
      {props.value}
    </div>
  );
}
