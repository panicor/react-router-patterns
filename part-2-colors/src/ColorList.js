import React from "react";
import { Link } from "react-router-dom";

function ColorList({colors}) {
  const colorLinks = Object.keys(colors).map(colorName => (
    <li key={colorName}>
      <Link to={`/colors/${colorName}`}>{colorName}</Link>
    </li>
  ));

  return (
    <div className="ColorList">
      <div>
        <h1 className="ColorList-title">Colors</h1>
        <h1>
          <Link to="/colors/new">Add a color</Link>
        </h1>
        </div>
      <div>
        <p>Select color</p>
        <ul>{colorLinks}</ul>
      </div>
    </div>
  );
}

export default ColorList;