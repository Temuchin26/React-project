import React, {Component} from 'react';
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { reset } from '../actions/commentAction';

class Navigation extends Component {

        checkRoute = () => {
            if(window.location.pathname !== "/redux-practic"){
                this.props.reset()
            }
        }

        render(){
            return (
            <div onClick={this.checkRoute} className = 'navigation' >
                <nav> 
                    <NavLink to="/infinity-scroll" className="navigation__link" activeClassName="active">Infinity Scroll</NavLink>
                    <NavLink to="/redux-practic" className="navigation__link" activeClassName="active">Redux Posts and Comments</NavLink>
                    <NavLink to="/react-dnd" className="navigation__link" activeClassName="active">React Drag and Drop</NavLink>
                </nav>
            </div>
        )
    }
}

export default connect(null, {reset},null, {pure: false})(Navigation);