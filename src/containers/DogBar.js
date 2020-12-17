import React from 'react';
import Dog from '../components/Dog';

const DogBar = ({pups, handlePup}) => {
  return (
    <div id="dog-bar">
      {pups.map(pup => <Dog key={pup.id} pup={pup} handlePup={handlePup}/>)}
    </div>
  );
}


export default DogBar;
