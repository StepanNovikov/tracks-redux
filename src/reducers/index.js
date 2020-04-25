import {combineReducers} from 'redux';
import tracks from './tracks';
import playlists from './playlists'
import filterTracks from './findFilterTracks';
import {routeReducer}from 'react-router-redux';

export default combineReducers({
    routing: routeReducer,
    tracks,
    playlists,
    filterTracks
})