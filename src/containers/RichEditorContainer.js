import { connect } from 'react-redux'
import { addContent } from '../actions'
import RichEditor from '../components/RichEditor'

const mapStateToProps = state => {
  const content = state.content; 

  return { content };
}

const mapDispatchToProps = dispatch => {
  return {
    addContent: content => {
      dispatch(addContent(content));
    }
  }
}

const RichEditorContainer = connect( mapStateToProps, mapDispatchToProps )(RichEditor)

export default RichEditorContainer
