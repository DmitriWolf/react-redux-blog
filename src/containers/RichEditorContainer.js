import { connect } from 'react-redux'
import { saveContent } from '../actions'
import { EditorState } from 'draft-js';
import RichEditor from '../components/RichEditor'

const mapStateToProps = (state, { currentPageId }) => {
  const editorContent = EditorState.createWithContent(state.content[currentPageId].currentContents);

  return { editorContent, currentPageId };
}

const mapDispatchToProps = dispatch => {
  return {
    saveContent: (content) => {
      /*
            const content = {
              id: this.state.contentId,
              content: currentContent,
            };
      */
      dispatch(saveContent(content));
    }
  }
}

const RichEditorContainer = connect( mapStateToProps, mapDispatchToProps )(RichEditor)

export default RichEditorContainer
