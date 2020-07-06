import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PlayAgain(props) {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div>
      <div className="winning">
        <h1>{props.winner} wins</h1>
      </div>
      <div className="redirect">
        <Link to="/home" className="btn btn-primary">
          Go to the Home Page
        </Link>
        <button className="btn btn-primary" onClick={refreshPage}>
          Play Again
        </button>
      </div>
    </div>
  );
}
