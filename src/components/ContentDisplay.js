import React, { Component } from 'react';

class ContentDisplay extends Component {
  render() {
		const content = this.props.content;
 		const htmlContent = () => { return {__html: content }; };

    return (
      <div className="RichEditor-root">
        <div dangerouslySetInnerHTML={htmlContent()} />
      </div>
    );
  }
}

export default ContentDisplay;
