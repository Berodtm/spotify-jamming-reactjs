import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';
import Playlist from './components/Playlist';
import Spotify from './Spotify';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([
    // Initial state
  ]);

  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([
    // Initial state
  ]);

  useEffect(() => {
    Spotify.getAccessToken(); // This will ensure the access token is set upon App load
  }, []);

  const searchSpotify = (searchTerm) => {
    Spotify.search(searchTerm).then(searchResults => {
      console.log('Search Results:', searchResults); // Debugging
      setSearchResults(searchResults);
    });
  };

  const handleAddTrack = (track) => {
    if (!playlistTracks.some(savedTrack => savedTrack.id === track.id)) {
      setPlaylistTracks(prevTracks => [...prevTracks, track]);
    }
  };

  const handleRemoveTrack = (trackId) => {
    setPlaylistTracks(prevTracks => prevTracks.filter(track => track.id !== trackId));
  };

const handleSavePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackUris, setPlaylistName, setPlaylistTracks).then(() => {
        console.log("Playlist saved to Spotify");
        setPlaylistName("New Playlist");
        setPlaylistTracks([]);
    });
};
  return (
    <div className="App">
      <SearchBar onSearch={searchSpotify} />
      <TrackList tracks={searchResults} onAdd={handleAddTrack} isRemoval={false} />
      <Playlist
        playlistName={playlistName}
        playlistTracks={playlistTracks}
        onRemove={handleRemoveTrack}
        onNameChange={setPlaylistName}
        onSave={handleSavePlaylist}
      />
    </div>
  );
}

export default App;
