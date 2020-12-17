import React from 'react';

 const DogInfo = ({pup, handleUpdate}) => {
  return (
    <div id="dog-info">
      <span>
        <img src={pup.image} />
        <h2>{pup.name}</h2>
        <button onClick={() => handleUpdate(pup.id)} > 
          {pup.isGoodDog ? 'Bad Dog!' : 'Good Dog!'}
        </button>
      </span>
    </div>
  );
}

export default DogInfo;
