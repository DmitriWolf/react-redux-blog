import React, { Component } from 'react';
import ContentDisplayContainer from '../containers/ContentDisplayContainer';
import RichEditorContainer from '../containers/RichEditorContainer';
import '../css/ComponentView.css';

class ComponentView extends Component {


  editContent = () => {
    this.props.editComponent();
  }

  render() {		
  	const currentPageId = this.props.currentPageId;
  	
    if(!currentPageId) {
      return (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      );
    }

    const pageContent = () => {
      if(this.props.editMode) {
        return (
          <RichEditorContainer 
            currentPageId={currentPageId}
          /> 
        );
      } else {
        return (
          <ContentDisplayContainer
            currentPageId={currentPageId}
          /> 
        );
      }
    }

    return (
    	<div className="view-area" onClick={(this.props.editMode) ? null : this.editContent}>
        {pageContent()}
    	</div>
    );
  }
}

export default ComponentView;
