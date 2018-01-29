import React, { Component } from 'react';
import PageViewContainer from './containers/PageViewContainer';
import './css/RichEditor.css';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="root">
        <PageViewContainer />
      </div>
    );
  }
}

export default App;
