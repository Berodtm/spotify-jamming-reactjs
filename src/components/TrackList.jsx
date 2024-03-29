import React from 'react';
import Track from './Track'; // Import the Track component

// Added onAdd, onRemove, and isRemoval props to handle track addition/removal
function TrackList({ tracks = [], onAdd, onRemove, isRemoval }) {
  return (
    <div className="trackList">
      {tracks.map(track => (
        // Updated to pass onAdd, onRemove, and isRemoval props to each Track component
        <Track 
          key={track.id} 
          {...track} 
          onAdd={onAdd} 
          onRemove={onRemove} 
          isRemoval={isRemoval} 
        />
      ))}
    </div>
  );
}

export default TrackList;
