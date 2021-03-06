import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index)=>(
        <div className="actor" key={index}>
          {actor.name}
          <p>Movies:</p>
          <ul>
            {actor.movies.map((movie, idex)=>(
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};


export default Actors;
