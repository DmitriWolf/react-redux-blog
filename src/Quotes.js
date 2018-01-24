import React, { Component } from 'react';

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('A quote was submitted: ' + this.state.value);
    this.props.addQuote(this.state.value);
    this.setState({value: ''});
    event.preventDefault();
  }

  render() {
    const quotesList = () => {
      return this.props.quotes.map((quote, i) => {
        return (
          <li key={`quote-${i}`} >{quote}</li>
        );
      })
    };

    return (
      <div className="quote-list">
        <h2>Quotes:</h2>
        <ul>
          {quotesList()}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>
            New Quote:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}

export default Quotes;
