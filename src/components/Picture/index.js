import React from "react";
import "./style.css";

function Picture(props) {
  return (
    <div className="Container">
      <div className="img-container ">
        <img className="img col-3" alt={props.id} src={props.image} />
      </div>
      </div>
  );
}

export default Picture;
