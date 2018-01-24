import { connect } from 'react-redux'
import { addQuote } from './actions'
import Quotes from './Quotes'

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addQuote: quote => {
      dispatch(addQuote(quote))
    }
  }
}

const QuotesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quotes)

export default QuotesContainer
