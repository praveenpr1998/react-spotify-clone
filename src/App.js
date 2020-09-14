import React, { useEffect } from "react";
import './App.css';
import Login from './Login.js';
import {getTokenFromUrl} from './Spotify';
import Player from './Player';
import SpotifyWebApi from 'spotify-web-api-js';
import {  useDataLayerValue} from './DataLayer';

const spotify=new SpotifyWebApi();

function App() {

  const [{token,playlistid},dispatch]=useDataLayerValue();

  useEffect(()=>{
    const hash= getTokenFromUrl();
    window.location.hash="";
    const _token=hash.access_token;
    


var url = window.location.toString();

    if(_token){
      dispatch({
        type:'SET_TOKEN',
        token:_token
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user)=>{
        dispatch({
          type:'SET_USER',
          user:user
        })
      })
    
      spotify.getUserPlaylists().then((playlists)=>{
     
        dispatch({
          type:'SET_PLAYLISTS',
          playlist:playlists
        })
      })

      spotify.getPlaylist(playlistid).then((response) =>
        {
      dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly:response
        })
      }
      );
      spotify.getMyTopArtists().then((response) =>
      dispatch({
        type: "SET_TOP_ARTISTS",
        top_artists: response,
      })
    );

    dispatch({
      type: "SET_SPOTIFY",
      spotify: spotify,
    });
    }
  },[token,playlistid,dispatch]);

    return (
    <div className="app">
      {token?<Player spotify={spotify} />:<Login />}
    </div>
  );
}

export default App;
