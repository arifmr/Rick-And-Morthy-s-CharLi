import './App.css';
import React from 'react'
import CharacterList from './Components/CharacterList'
import axios from 'axios'

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      characters: [],
    }
  }
  
  componentDidMount() {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => {
        console.log(res.data.results);
        this.setState({characters: res.data.results})
      })
      .catch(err => {
        console.log(err);
      })
  }

  render () {
    const { characters } = this.state
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1>Rick And Morthy Character List</h1>
        </div>
        <div className="row justify-content-center">
          { characters.map(character =>
            {return <CharacterList key={character.id} character={character} />}
          ) }
        </div>
        
      </div>
    );
  }
}

export default App;
