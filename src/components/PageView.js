import React, { Component } from 'react';
import ContentDisplayContainer from '../containers/ContentDisplayContainer';
import RichEditorContainer from '../containers/RichEditorContainer';
import '../css/PageView.css';

class PageView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editMode: false,
		};
	}

  editContent = () => {
    this.setState({ editMode: true });
  }

	stopEditingContent = () => {
		this.setState({ editMode: false });
	}

  render() {		
    const pageContent = () => {
      if(this.state.editMode) {
        return (
          <div>
            <button className="RichEditor-styleButton RichEditor-activeButton edit-mode" onClick={this.stopEditingContent}>
              Stop Editing
            </button>
            <RichEditorContainer /> 
          </div>
        );
      } else {
        return (
          <ContentDisplayContainer />
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

export default PageView;
