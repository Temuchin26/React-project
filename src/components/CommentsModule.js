import React, {Component} from 'react';
import { connect } from 'react-redux';
import {showComment, addComment} from '../actions/commentAction';
import PropTypes from 'prop-types';

class CommentsModule extends Component {

        constructor(props){
            super(props);
            this.state = ({
                text: ''
            })
        }

        submit = (e) => {
            const {showComment, addComment, curentComment, curentPost} = this.props
            e.preventDefault();
            addComment({name: this.state.text})
            curentPost != undefined && curentComment != undefined ?
            showComment(curentPost.comments, curentComment) : null
            this.forceUpdate()
        }

        hadndleChange = (e) => {
            this.state[e.target.name] != undefined ? 
            this.setState({
                [e.target.name]: e.target.value
            }) : null
        }

        render(){
            const boxShadow = this.props.curentComment != '' ? "0 0 10px 1px grey" : "none"  
            return (
            <div className={"commentModule"} style= {{boxShadow}}>
            {   this.props.curentComment != '' &&
                <div className="list">
                        {this.props.comments.map((el, i) => 
                            (<p className="comment" key={i}>{el.name}</p>)
                        )}
                </div>
            }
                {this.props.curentComment != '' ? 
                <form action="" onSubmit={this.submit} className="commentModule__form">
                    <textarea type="text" name="text" placeholder="Comment text" required value={this.state.text} onChange={this.hadndleChange}/>
                    <button type="submit">Add Comment</button>
                </form> : null    }
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    posts: state.posts.posts,
    comments: state.posts.comment,
    curentPost: state.posts.curentPost,
    curentComment: +state.posts.curentComment
})

export default connect(mapStateToProps, {showComment, addComment})(CommentsModule);

CommentsModule.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
        id: PropTypes.number.isRequired,
        comments: PropTypes.array
    })),
    comments: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string
    })),
    currentComment: PropTypes.number,
    currentPost: PropTypes.object,
    showComment: PropTypes.func,
    addComment: PropTypes.func,
}