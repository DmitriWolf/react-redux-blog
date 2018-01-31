import { connect } from 'react-redux'
import ContentDisplay from '../components/ContentDisplay';
import {stateToHTML} from 'draft-js-export-html';

const mapStateToProps = (state, { currentPageId }) => {
	const currentContents = state.content[currentPageId].currentContents; 
	const content = stateToHTML(currentContents); 
      
  return { content };
}

const ContentDisplayContainer = connect( mapStateToProps )(ContentDisplay)

export default ContentDisplayContainer
