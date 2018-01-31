import React, { Component } from 'react';
import ComponentView from './ComponentView';
import { contentIsPresent } from '../utils';
import '../css/PageView.css';

class PageView extends Component {
	constructor(props) {
		super(props);

		this.state = {
      editMode: true,
      currentPageId: props.currentPageId,
      allPageIds: this.props.allPageIds || [],
		};
	}

  componentDidMount() {
    if(!contentIsPresent(this.props.content)) {
      this.props.loadInitialContent();
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.currentPageId !== nextProps.currentPageId) {
      this.setState({ currentPageId: nextProps.currentPageId});
    }
    if(this.props.allPageIds !== nextProps.allPageIds) {
      this.setState({ allPageIds: nextProps.allPageIds});
    }
  }

  addNewPage = () => {
    this.props.addNewPage();
  }

  selectPage = pageId => {
    this.setState({ currentPageId: pageId });
  }

  render() {		
    const menuContent = () => {
      return (
        <div className="nav-bar">
          <ul>
            {
              this.state.allPageIds.map(pageId => {
                return (
                  <li
                    key={`link-${pageId}`} 
                    onClick={() => this.selectPage(pageId)} 
                    value={pageId}
                  >
                    {pageId}
                  </li>
                );
              })
            }
          </ul>
        </div>
      );
    }

    const editButtons = () => {
      if(this.state.editMode) {
        return (
          <div>
            <button className="edit-button edit-mode" onClick={this.stopEditingContent}>
              Stop Editing
            </button>
            <button className="edit-button new-page" onClick={this.addNewPage}>
              Add New Page
            </button>
          </div>
        );
      }
    };

    return (
      <div className="page-view">
        {menuContent()}
        {editButtons()}
        <ComponentView
          currentPageId={this.state.currentPageId}
        /> 
      </div>
    );
  }
}

export default PageView;
