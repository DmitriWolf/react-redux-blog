import React, { Component } from 'react';
import ContentDisplayContainer from '../containers/ContentDisplayContainer';
import RichEditorContainer from '../containers/RichEditorContainer';
import '../css/ComponentView.css';

class ComponentView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editMode: true,
		};
	}


  editContent = () => {
    this.setState({ editMode: true });
  }

	stopEditingContent = () => {
		this.setState({ editMode: false });
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
      if(this.state.editMode) {
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
    	<div className="view-area" onClick={(this.state.editMode) ? null : this.editContent}>
        {pageContent()}
    	</div>
    );
  }
}

export default ComponentView;
