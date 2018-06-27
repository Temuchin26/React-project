import React, {Component} from 'react';
import Posts from './Posts';
import CommentsModule from './CommentsModule';

class commentList extends Component {
        render(){
            return (
            <div className = 'commentList' >
                <Posts />
                <CommentsModule />
            </div>
        )
    }
}

export default commentList;