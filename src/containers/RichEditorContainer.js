import { connect } from 'react-redux'
import { saveContent } from '../actions'
import { EditorState } from 'draft-js';
import RichEditor from '../components/RichEditor'

const mapStateToProps = (state, { currentPageId }) => {
  if(!currentPageId) {
    return;
  }

  const content = state.content[currentPageId] && state.content[currentPageId].currentContents; 
  const editorContent = EditorState.createWithContent(content);

  return { editorContent, currentPageId };
}

const mapDispatchToProps = dispatch => {
  return {
    saveContent: (content) => {
      /*
        const content = {
          id: this.state.contentId,
          currentContents: currentContent,
        };
      */
      dispatch(saveContent(content));
    }
  }
}

const RichEditorContainer = connect( mapStateToProps, mapDispatchToProps )(RichEditor)

export default RichEditorContainer
