import React, { Component } from 'react';
import RichEditorContainer from './containers/RichEditorContainer';
import ContentDisplayContainer from './containers/ContentDisplayContainer';
import './css/RichEditor.css';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="Root">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Redux Blog</h1>
        </header>
        <RichEditorContainer />
        <ContentDisplayContainer />
      </div>
    );
  }
}

export default App;
