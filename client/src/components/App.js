//TODO
import React from 'react';
import PokemonList from './PokemonList.js';
import Search from './Search';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [] //init state as null
    };
  }

  componentDidMount() {
    //this.setState is ASYNCHRONOUS, can't console log right after
    this.setState({
      pokemon: this.props.pokemon   //passed down from index.js <App pokemon={pokemon} />
    });
  }

  getPokemon = (query) => {
    this.props.getPokemon(query, ({data}) => {
      
      // console.log(data);
      /*
      var id = data.id
      var name = data.name
      var sprites = data.sprites
      var pokeman = data.pokeman
      */

      let { id, name, sprites } = data;
      // let copy = this.state.pokemon.slice();
      // copy.push({ id, name, sprites })
      let pokemon = [...this.state.pokemon, { id, name, sprites }];
      this.setState({ pokemon });
    }) 
  }

  render() {
    return (
      <div>
        <Search getPokemon={this.getPokemon}/> <br />
        <PokemonList pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;