import React, {Component} from 'react';
import { connect } from 'react-redux';
import {showComment, addPost, addComment, deletePost} from '../actions/commentAction';
import PropTypes from 'prop-types';

class Posts extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            text: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getComment = (comment, id, post) => {
        this.props.showComment(comment, id,post);
        this.forceUpdate()
    }

    submitInComponent = (e) => {
        const {title} = this.state;
        e.preventDefault()
        title != '' ?
        this.props.addPost({id: new Date().getTime(), title: title, comments: []})
        : null
        this.setState({
            title: '',
            // text: ''
        })
    }

    render(){
        const {title, text} = this.state;
        return (
            <div className="commentList__posts">
                <h2 className="commentList__postsTitle">
                    Posts
                </h2>
                <form action="" onSubmit={this.submitInComponent} className="commentList__form">
                    <input required type="text" onChange={this.handleChange} name="title" value={title} placeholder="Post Title"/>
                    {/* <input required type="text" onChange={this.handleChange} name="text" value={text} placeholder="Post Text"/> */}
                    <button type="submit">Create Post</button>
                </form>
                    {
                        this.props.posts.map((el, i) => 
                            <div key={i} className="commentList__post">
                                <h3 className={this.props.curentPost == el ? "active" : ''}>{el.title}</h3>
                                <div className="wrap">
                                    <button id="btn1" onClick={() => this.getComment(el.comments, el.id, el)}>Comments <span>{el.comments.length}</span></button>
                                    <button id="btn2" onClick={() => this.props.deletePost(el.id)}>Delete post</button>
                                </div>
                            </div>
                        )
                    }
                </div>
        )
    };
}

const mapStateToProps = state => ({ 
    posts: state.posts.posts,
    comments: state.posts.comment,
    curentPost: state.posts.curentPost
})  

export default connect(mapStateToProps, {showComment, addPost, addComment, deletePost})(Posts);

Posts.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
        id: PropTypes.number.isRequired,
        comments: PropTypes.array
    })),
    comments: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string
    })),
    showComment: PropTypes.func,
    addPost: PropTypes.func,
    addComment: PropTypes.func,
    deletePost: PropTypes.func
}