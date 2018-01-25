import { connect } from 'react-redux'
import { addContent } from '../actions'
import ContentDisplay from '../components/ContentDisplay';

const mapStateToProps = state => {
	const content = state.content; 

  return { content };
}

const mapDispatchToProps = dispatch => {
  return {
    addContent: quote => {
      dispatch( addContent( quote ) )
    }
  }
}

const ContentDisplayContainer = connect( mapStateToProps, mapDispatchToProps )(ContentDisplay)

export default ContentDisplayContainer
