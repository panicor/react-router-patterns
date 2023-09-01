import React from 'react';
import { useParams } from 'react-router-dom';
import DogDetails from './DogDetails';

function FilterDogs({dogs}) {
  let {name} = useParams();

  if (name) {
    let currentDog = dogs.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <DogDetails dog={currentDog} />;
  }
  
  return null;
}

export default FilterDogs;