//Antes de empezar Instalar Toolkit: $ npm install @reduxjs/toolkit / $ npm install --save react-redux

import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/UserSlice";
import tokenReducer from "../features/TokenSlice";
import playlistReducer from "../features/PlaylistSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        token: tokenReducer,
        playlist: playlistReducer,
    }
})