import {combineReducers} from 'redux';
import comment from './postAndCommentReducer';

export default combineReducers({
    posts: comment 
})
