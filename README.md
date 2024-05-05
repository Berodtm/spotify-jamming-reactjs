# Spotify Jamming

## Overview
Spotify Jamming is a web application that allows users to create and manage playlists on Spotify. Users can search for tracks, add them to a playlist, and then save the playlist to their Spotify account.

## Features
- Search for tracks: Search the Spotify library for tracks based on keywords.
- Add tracks to a playlist: Select tracks from the search results to add them to a playlist.
- Save playlist to Spotify: Save the created playlist to your Spotify account.

## Technologies Used
- React: Frontend framework for building the user interface.
- Spotify Web API: Access Spotify's extensive music catalog and manage user playlists.
- JavaScript: Programming language for implementing application logic.
- HTML/CSS: Markup and styling for the web application.
- Git/GitHub: Version control and collaboration platform.
- Vite - npm create Vite@latest for boilder plate react app and dev enviorment. 

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Berodtm/spotify-jamming.git
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Spotify dev Dashboard: https://developer.spotify.com/
Netlify: https://app.netlify.com/
host url: https://spotify-jamming-rd-codecademy.netlify.app/

echo "# spotify-jamming" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Berodtm/spotify-jamming-reactjs.git
git push -u origin main

git remote add origin https://github.com/Berodtm/spotify-jamming-reactjs.git
git branch -M main
git push -u origin main

# Project Setup and Deployment Guide

This document outlines the key steps and concepts involved in modifying the `spotify.js` file, handling environment variables locally and on Netlify, and the general workflow from code edits to deployment.

## Modifying the `spotify.js` File

### Purpose
Update `spotify.js` to correctly handle environment variables for Spotify's Client ID and Redirect URI, ensuring dynamic use of the correct settings for both local development and production environments.

### Changes Made
- Switched from `process.env` to `import.meta.env` for compatibility with Vite.
- Introduced `VITE_` prefixes to environment variables (`VITE_CLIENT_ID` and `VITE_REDIRECT_URI`) for exposure by Vite.

## Handling Environment Variables

### Locally
- Use `.env.local` files for local development environment variables, including `VITE_CLIENT_ID` and `VITE_REDIRECT_URI`, with the latter set to a local server address for testing.

### On Netlify
- Set `VITE_CLIENT_ID` and `VITE_REDIRECT_URI` in Netlify's environment variables, with `VITE_REDIRECT_URI` set to the production callback URL.

## Workflow: Edit, Add, Commit, Push, and Deploy

1. **Edit Code**: Make changes locally.
2. **Add Changes**: Stage changes with `git add .`.
3. **Commit Changes**: Secure changes with `git commit -m "Your commit message"`.
4. **Push Changes**: Update the remote repository with `git push`.
5. **Automatic Deployment on Netlify**: Triggered by pushing to GitHub, Netlify builds and deploys the latest commit.

## Key Concepts and Best Practices

- **Environment Variable Prefix**: Use `VITE_` for Vite projects.
- **SPA Routing on Netlify**: Use a `_redirects` file with `/* /index.html 200` for correct route handling.
- **Testing**: Test changes both locally and in the deployed environment.

This guide emphasizes the importance of managing settings across development and production environments, using Git for version control, and leveraging Netlify for continuous deployment.

