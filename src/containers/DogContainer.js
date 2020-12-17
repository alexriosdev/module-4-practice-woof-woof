import React from 'react';
import DogInfo from '../components/DogInfo';

const DogContainer = ({pup, handleUpdate}) => {
  return (
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      {pup ? <DogInfo pup={pup} handleUpdate={handleUpdate} /> : null}
    </div>
  );
}


export default DogContainer;
