import React, { Component } from 'react';
import {stateToHTML} from 'draft-js-export-html';

class ContentDisplay extends Component {
  render() {
		const content = Object.keys(this.props.content).length > 0 ? stateToHTML(this.props.content) : null;
 		const htmlContent = () => { return {__html: content }; };

    return (
      <div className="RichEditor-root">
        <div dangerouslySetInnerHTML={htmlContent()} />
      </div>
    );
  }
}

export default ContentDisplay;
