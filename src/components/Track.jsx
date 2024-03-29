import React from 'react';

function Track({ id, name, artist, album, onAdd, onRemove, isRemoval }) {
  // Function to handle adding a track
  const addTrack = () => {
    if (onAdd) onAdd({ id, name, artist, album });
  };

  // Function to handle removing a track
  const removeTrack = () => {
    if (onRemove) onRemove(id);
  };

  return (
    <div className="Track">
      <h3>{name}</h3>
      <p>{artist} - {album}</p>
      {
        isRemoval 
          ? <button onClick={removeTrack} className="Track-action">Remove</button> 
          : <button onClick={addTrack} className="Track-action">Add</button>
      }
    </div>
  );
}

export default Track;
