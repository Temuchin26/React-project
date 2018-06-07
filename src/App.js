import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './mySass.css';
import TitleComponent from './components/TitleComponent'

import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TitleComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
