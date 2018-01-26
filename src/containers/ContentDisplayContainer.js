import { connect } from 'react-redux'
import ContentDisplay from '../components/ContentDisplay';

const mapStateToProps = state => {
	const content = state.content; 

  return { content };
}

const ContentDisplayContainer = connect( mapStateToProps )(ContentDisplay)

export default ContentDisplayContainer
