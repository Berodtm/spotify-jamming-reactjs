// const clientId = process.env.REACT_APP_CLIENT_ID; // Use your actual client ID environment variable name
// const redirectUri = process.env.REACT_APP_REDIRECT_URI; // Use your actual Redirect URI environment variable name
// const scope = 'playlist-modify-public';

const clientId = import.meta.env.VITE_CLIENT_ID;
const redirectUri = import.meta.env.VITE_REDIRECT_URI;
const scope = 'playlist-modify-public';

let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // Check for access token match in the URL fragment
    const accessTokenMatch = window.location.hash.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.hash.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      // Clear the access token and URL parameters after the token expires
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('AccessToken', null, '/'); // Clears the URL parameters

      return accessToken;
    } else {
      // Redirect user to authorize the application
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}&show_dialog=true`;
      window.location.href = accessUrl;
    }
  },

  async search(term) {
    const accessToken = this.getAccessToken();
    try {
      const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      const jsonResponse = await response.json();
      if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artists: track.artists.map(artist => artist.name),
        album: track.album.name,
        uri: track.uri
      }));
    } catch (error) {
      console.error('Error searching tracks:', error);
      return []; // Return an empty array in case of an error
    }
  },

  async savePlaylist(playlistName, trackUris) {
    if (!playlistName || !trackUris.length) {
      console.log('Playlist name or tracks are missing.');
      return;
    }

    const accessToken = this.getAccessToken();
    if (!accessToken) {
      console.log('Access Token is missing.');
      return;
    }

    const headers = { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' };

    try {
      console.log('trackUris', trackUris);
      const userResponse = await fetch('https://api.spotify.com/v1/me', { headers });
      const userData = await userResponse.json();
      const userId = userData.id;

      const createPlaylistResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ name: playlistName })
      });
      const playlistData = await createPlaylistResponse.json();
      const playlistId = playlistData.id;

      const addTracksResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ uris: trackUris })
      });

      if (!addTracksResponse.ok) {
        const errorData = await addTracksResponse.json();
        console.error('Failed to add tracks:', errorData);
        return;
      }

      console.log("Playlist saved to Spotify");
    } catch (error) {
      console.error('Error saving playlist:', error);
    }
  }
};

export default Spotify;
