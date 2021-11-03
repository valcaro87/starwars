import React from 'react';

const Planet = ({ personzz }) => {
  return (
    <div className="card">
      <h3>{personzz.name}</h3>
      <p> Birth Year - {personzz.birth_year }</p>
      <p> Gender - {personzz.gender} </p>
    </div>
  );
}

export default Planet;
