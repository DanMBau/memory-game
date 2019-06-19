import React from "react";
import "./style.css";

function Picture(props) {
  return (
    <div onClick={() => props.setClicked(props.id)} className="card col-md-3">
      <div className="img-container ">
        <img className="img" alt={props.id} src={props.image} />
      </div>
      </div>
  );
}

export default Picture;
