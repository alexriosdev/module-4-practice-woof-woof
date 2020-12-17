import React from 'react';

const Dog = ({pup, handlePup}) => {
  return <span onClick={()=>handlePup(pup)} >{pup.name}</span>;
}

export default Dog;
