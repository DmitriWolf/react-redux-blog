import React, { Component } from 'react';
import ContentDisplayContainer from '../containers/ContentDisplayContainer';
import RichEditorContainer from '../containers/RichEditorContainer';
import { contentIsPresent } from '../utils';
import '../css/PageView.css';

class PageView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editMode: true,
      currentPage: props.pageId,
		};
	}

  componentDidMount() {
    if(!contentIsPresent(this.props.content)) {
      this.props.loadInitialContent();
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.pageId !== nextProps.pageId) {
      this.setState({ currentPage: nextProps.pageId});
    }
  }

  editContent = () => {
    this.setState({ editMode: true });
  }

  addNewPage = () => {
    this.props.addNewPage();
  }

	stopEditingContent = () => {
		this.setState({ editMode: false });
	}

  selectPage = pageId => {
    console.log('set pageId to ', pageId);
    this.setState({ currentPage: pageId });
  }

  render() {		
    if(!this.props.pageId) {
      return (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      );
    }

    // const menuContent = () => {
    //   return (
    //     <div className="nav-bar">
    //       <ul>
    //         {
    //           Object.keys(this.props.content).map(pageId => {
    //             return (
    //               <li
    //                 key={`link-${pageId}`} 
    //                 onClick={() => this.selectPage(pageId)} 
    //                 value={pageId}
    //               >
    //                 {pageId}
    //               </li>
    //             );
    //           })
    //         }
    //       </ul>
    //     </div>
    //   );
    // }

    const pageContent = () => {
      if(this.state.editMode) {
        return (
          <div>
            <button className="edit-button edit-mode" onClick={this.stopEditingContent}>
              Stop Editing
            </button>
            <button className="edit-button new-page" onClick={this.addNewPage}>
              Add New Page
            </button>
            <RichEditorContainer 
              currentPageId={this.state.currentPage}
            /> 
          </div>
        );
      } else {
        return (
          <ContentDisplayContainer
            currentPage={this.state.currentPage}
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

export default PageView;
