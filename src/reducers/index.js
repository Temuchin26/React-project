import {combineReducers} from 'redux';
import changeTitle from './changeTitle'

export default combineReducers({
    items: changeTitle
})
