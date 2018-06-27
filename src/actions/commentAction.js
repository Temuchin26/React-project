import * as actionType from "./types";

const reset = () => dispatch => {
    return dispatch({
        type: actionType.RESET
    })
}

const showComment = (comment, id, post) => dispatch => {
    return dispatch({
        type: actionType.SHOW_COMENTS,
        payload: comment,
        id: id,
        post: post
    })
}

const addPost = (post) => dispatch => {
    return dispatch({
        type: actionType.ADD_POST,
        payload: post
    })
}

const addComment = (comment, current) => dispatch => {
        return dispatch({
            type: actionType.ADD_COMMENT,
            payload: comment,
        })
}

const deletePost = (postId) => dispatch => {
    return dispatch({
        type: actionType.DELETE_POST,
        payload: postId
    })
}

export  {deletePost, reset, showComment, addPost, addComment}
