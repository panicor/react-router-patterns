import React from "react";
import { Link, Redirect } from "react-router-dom";

function DogDetails({dog}) {

  if (!dog) return <Redirect to="/dogs"/>

  return (
    <div className="row DogDetails">
      <div className="col d-flex flex-column align-items-center">
        <img src={dog.src} alt={dog.name} />
        <h2>Name: {dog.name}</h2>
        <h2>Age: {dog.age}</h2>
        <h2>Fact about {dog.name}: </h2>
        <ul>
          {dog.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
        <Link to="/dogs">Back</Link>
      </div>
    </div>
  );
}

export default DogDetails;