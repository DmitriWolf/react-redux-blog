import { connect } from 'react-redux'
import { addNewPage, loadInitialContent } from '../actions'
import PageView from '../components/PageView'
import { contentIsPresent } from '../utils';

const mapStateToProps = state => {
  const content = state.content; 
  if(!contentIsPresent) {
  	return { content };
  }
  const allPageIds = Object.keys(state.content);
  const currentPageId = allPageIds[0];

  return { allPageIds, currentPageId };
}

const mapDispatchToProps = dispatch => {
  return {
    addNewPage: () => {
      dispatch(addNewPage());
    },
    loadInitialContent: () => {
      dispatch(loadInitialContent());
    },
  }
}

const PageViewContainer = connect( mapStateToProps, mapDispatchToProps )(PageView)

export default PageViewContainer
