import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  handleChange = (e) => {
    let query = e.target.value;
    this.setState({query}); //if key and variable are same word, es6 will autoformat
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.getPokemon(this.state.query);
  }

  render() {
    return (<div>
      <form action="" onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        <button type="submit">Add Pokemon</button>
      </form>
    </div>
    )
  };
}

export default Search;