import { connect } from 'react-redux'
import { saveContent } from '../actions'
import { EditorState } from 'draft-js';
import RichEditor from '../components/RichEditor'

const mapStateToProps = (state, { currentPageId }) => {
	console.log('')
	console.log('RichEditorContainer - mstp - state: ', state);
	console.log('currentPageId: ', currentPageId);
  const content = EditorState.createWithContent(state.content[currentPageId].currentContent); 
	console.log('content: ', content);

  return { content, currentPageId };
}

const mapDispatchToProps = dispatch => {
  return {
    saveContent: (content, currentPageId) => {
      dispatch(saveContent(currentPageId, content));
    }
  }
}

const RichEditorContainer = connect( mapStateToProps, mapDispatchToProps )(RichEditor)

export default RichEditorContainer
