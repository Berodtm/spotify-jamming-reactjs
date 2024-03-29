import React from 'react';
import Track from './Track'; 

function TrackList({ tracks = [], onAdd, onRemove, isRemoval }) {
  return (
    <div className="trackList">
      {tracks.map(track => (
        <Track 
          key={track.id} 
          {...track} 
          onAdd={() => onAdd(track)} 
          onRemove={() => onRemove(track)} 
          isRemoval={isRemoval} 
        />
      ))}
    </div>
  );
}

export default TrackList;
