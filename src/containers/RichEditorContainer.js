import { connect } from 'react-redux'
import { addContent } from '../actions'
import RichEditor from '../components/RichEditor'

const mapStateToProps = state => {
  return {
    content: state.content,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addContent: quote => {
      dispatch(addContent(quote))
    }
  }
}

const RichEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RichEditor)

export default RichEditorContainer
