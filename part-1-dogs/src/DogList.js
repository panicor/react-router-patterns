import React from "react";
import { Link } from "react-router-dom";

function DogList({dogs}){
return(
    <div>
    <h1>Who Let The Dogs Out?</h1>
    <div>
        {dogs.map(dog => (
            <div>
               <img src={dog.src} alt={dog.name} />
            <h2>
              <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
            </h2> 
            </div>
        ))}
    </div>
    </div>
)
}

export default DogList;