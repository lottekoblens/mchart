import React from 'react';

function Card({ingredient}) {
  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        <h2>{ingredient.children.name}</h2>
        <p>{ingredient.children.base}</p>
      </div>
    </div>
  );
}

export default Card;