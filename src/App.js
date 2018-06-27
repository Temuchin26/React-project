import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CommentList from './components/CommentList';
import './mySass.css';
import { Switch, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import store from './store';
import dndContainer from './components/React dnd/dndContainer';
import EnterInfinityScroll from './components/Infinity Scroll/EnterInfinityScroll';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navigation />
          <Switch> 
            <Route exact path="/redux-practic" component={CommentList}/>
            <Route exact path="/react-dnd" component={dndContainer} />
            <Route exact path="/infinity-scroll" component={EnterInfinityScroll} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
