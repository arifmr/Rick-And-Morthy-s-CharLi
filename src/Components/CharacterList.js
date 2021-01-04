import React from 'react'

class CharacterList extends React.Component {
  render () {
    return (
      <div className="card m-2 col-2" key={this.props.character.id}>
        <div className="card-header"><img src={this.props.character.image} alt={this.props.character.image} style={{width: "100%"}} /></div>
        <div className="card-body text-center">{this.props.character.name}</div>
      </div>
    )
  }
}

export default CharacterList