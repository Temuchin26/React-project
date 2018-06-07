import { CREATE_TITLE, DECREMENT_ONE, INCREMENT_ONE, MAGIC} from '../actions/types';

const initialState = {
    title: '',
    count: 0,
    class: '',
    log: []
}
 
export default function(state = initialState, action){
    // console.log(action.payload )
    switch(action.type){
        case CREATE_TITLE: 
            return {
                ...state,
                title: action.payload,
                log: state.log.concat(action.type)
            }
        case DECREMENT_ONE:
            return {
                ...state,
                count: state.count - 1,
                log: state.log.concat(action.type)
            }
        case INCREMENT_ONE: 
            return {
                ...state,
                count: state.count + 1,
                log: state.log.concat(action.type)
            }
        case MAGIC:
            return{
                ...state,
                class: state.class === '' ? state.class = 'magic' : '',
                log: state.log.concat(action.type)
            }
        default:
            return state
    }
    
}