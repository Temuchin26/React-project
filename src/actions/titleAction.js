import { CREATE_TITLE, DECREMENT_ONE, INCREMENT_ONE, MAGIC} from '../actions/types'

const changeTitle = (title) => dispatch => {
    console.log("action work")
    return dispatch({
        type: CREATE_TITLE,
        payload: title
    })
}

const decrementOne = () => dispatch => {
    return dispatch({
        type: DECREMENT_ONE
    })
}

const incrementOne = () => dispatch => {
    return dispatch({
        type: INCREMENT_ONE
    })
}

const magic = () => dispatch => {
    return dispatch({
        type: MAGIC
    })
}

export  {changeTitle,incrementOne,decrementOne,magic}