import React from "react";
import { Link, useParams } from "react-router-dom";

function Color() {
//   if (!hex) {
//     history.push("/colors");
//   }
const {color} = useParams();
  return (
    <div className="Color" style={{ backgroundColor: color}}>
      <p>{color}</p>
        <Link to="/">Go back</Link>
    </div>
  );
}

export default Color;