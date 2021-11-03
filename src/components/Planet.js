import React from 'react';

const Planet = ({ planetzz }) => {
  return (
    <div className="card">
      <h3>{planetzz.name}</h3>
      <p> Population - {planetzz.population }</p>
      <p> Terrain - {planetzz.terrain} </p>
    </div>
  );
}

export default Planet;
