import React from 'react';
import Editor from 'draft-js-plugins-editor';
import { RichUtils} from 'draft-js';
import createInlineToolbarPlugin, { Separator } from 'draft-js-inline-toolbar-plugin';
import { contentIsPresent } from '../utils';
import '../css/InlineToolbarPlugin.css';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from 'draft-js-buttons';

const inlineToolbarPlugin = createInlineToolbarPlugin({
  structure: [
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    BoldButton,
    ItalicButton,
    UnderlineButton,
    CodeButton,
    Separator,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton
  ]
});

class RichEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    	editorState: props.editorContent,
    	contentId: props.id, 
    };

    this.focus = () => this.refs.editor.focus();
    this.onChange = this.onChange.bind(this);

    this.handleKeyCommand = this._handleKeyCommand.bind(this);
    this.onTab = this._onTab.bind(this);
    this.toggleBlockType = this._toggleBlockType.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.currentPageId !== nextProps.currentPageId) {
      this.setState({ 
        currentPageId: nextProps.currentPageId,
        editorState: nextProps.editorContent,
      });
    }
  }

  _handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _onTab(e) {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  }

  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  onChange(editorState) {
  	// when the editor decides it is a good time to make an undo trace, it's a good time for us to save.
  	const previousUndoStackSize = this.state.editorState._immutable.undoStack.size;
  	const nextUndoStackSize = editorState._immutable.undoStack.size;
  	if(previousUndoStackSize !== nextUndoStackSize) {
  		const currentContent = editorState.getCurrentContent();
      const contentId = this.props.currentPageId;
  		const content = {
  			id: contentId,
  			content: currentContent,
  		};
  		this.props.saveContent(content);
  	} 

  	this.setState({editorState});
  }

  render() {
    const editorState = this.state.editorState;
    if (!contentIsPresent(editorState)) {
      return (
        <div className="loading">
          <h1>Editor is loading your content</h1>
        </div>
      );
    }

    const { InlineToolbar } = inlineToolbarPlugin;
    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor';

    return (
      <div className="RichEditor-root">
        <div className={className} onClick={this.focus}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            onTab={this.onTab}
            placeholder="Tell a story..."
            ref="editor"
            spellCheck={true}
            plugins={[inlineToolbarPlugin]}
          />
          <InlineToolbar />
        </div>
      </div>
    );
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    default: return null;
  }
}

export default RichEditor;
