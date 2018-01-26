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

	toggleEdit = () => {
		this.setState({ editMode: !this.state.editMode });
	}

  render() {
		const editToggleButtonLabel = (this.state.editMode) ? 'View Draft' : 'Edit';
		
    return (
    	<div className="view-area">
    		<button 
    			className="edit-mode"
    			onClick={this.toggleEdit}
    		>
    			{editToggleButtonLabel}
    		</button>

    		{
    			(this.state.editMode) ? <RichEditorContainer /> : <ContentDisplayContainer />
    		}
    	</div>
    );
  }
}

export default PageView;
