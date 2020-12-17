import React from 'react';

 const DogFilter = ({toggle, handleFilter}) => {
  return (
    <div id="filter-div" onClick={() => handleFilter()} >
      <button id="good-dog-filter">Filter good dogs: {toggle ? 'ON' : 'OFF'}</button>
    </div>
  );
}

export default DogFilter;
