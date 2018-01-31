import { connect } from 'react-redux'
import ContentDisplay from '../components/ContentDisplay';

const mapStateToProps = (state, { currentPageId }) => {
	const content = state.content[currentPageId]; 
      
  return { content };
}

const ContentDisplayContainer = connect( mapStateToProps )(ContentDisplay)

export default ContentDisplayContainer
