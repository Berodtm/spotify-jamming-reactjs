import React from 'react';
import TrackList from './TrackList';

function Playlist({ playlistName, playlistTracks, onRemove, onNameChange, onSave }) {
  // Handles changes to the playlist name input field
  const handleNameChange = (event) => {
    onNameChange(event.target.value);
  };

  return (
    <div className="playlist">
      {/* Input for changing the playlist name */}
      <input 
        className="playlist-name-input" 
        value={playlistName} 
        onChange={handleNameChange} 
        placeholder="New Playlist Name" 
      />
      <p>Current Playlist Name: {playlistName}</p>
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button className="Playlist-save" onClick={onSave}>Save to Spotify</button>
    </div>
  );
}

export default Playlist;
