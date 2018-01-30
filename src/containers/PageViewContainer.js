import { connect } from 'react-redux'
import { addNewPage, loadInitialContent } from '../actions'
import PageView from '../components/PageView'
import { contentIsPresent } from '../utils';

const mapStateToProps = state => {
  const content = state.content; 
  if(!contentIsPresent) {
  	return { content };
  }
  const pageId = Object.keys(state.content)[0];

  // const pageList = Object.keys(state.content).reduce((acc, pageId) => {
  // 	acc[pageId] = Object.assign({}, state.content[pageId]);
  // 	return acc;
  // }, {});

  return { pageId };
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
