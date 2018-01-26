import React, { Component } from 'react';
import PageView from './components/PageView';
import './css/RichEditor.css';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="root">
        <PageView />
      </div>
    );
  }
}

export default App;
