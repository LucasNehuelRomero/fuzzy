import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.module.css';
import Login from './componentes/Login';
import Player from './componentes/Player'
import { getTokenFromURL } from './FuzzyLogic';
import { SET_PLAYLIST } from './features/PlaylistSlice';
import { selectToken, SET_TOKEN } from '/features/TokenSlice';
import { selectUser, SET_USER } from '/features/UserSlice';

const spotify = new SpotifyWebApi();

function App() {
  const token = useSelector(selectToken)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  

  useEffect(() => {
  const hash = getTokenFromURL();
  const _token = hash.access_token;
  
  if (_token) {
    dispatch(SET_TOKEN(_token))
    spotify.setAccessToken(_token);
    spotify.getMe().then(user =>dispatch(SET_USER(user)))//Dispatch = Hook
    console.log("token =>", token)
    spotify.getPlaylist("f24ab3a85bb648afa08f27061f22b28e").then(playlist => 
      dispatch(SET_PLAYLIST(playlist))) 
  }
  

}, [dispatch])


  
  return (
     
     <div>
      {
        user ? <Player /> : <Login /> //Conditional render
      }
      </div>
  );
}

export default App;
