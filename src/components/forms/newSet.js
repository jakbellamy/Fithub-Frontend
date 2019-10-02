import React, { Component } from 'react'
import NewSetComp from './newSetComp'
export default class NewSetForm extends Component {
  state = {
    counter: 0,
    subSets: [{id: 0}]
  }

  buttonPress = (e) => {
    e.preventDefault()
    this.state.counter ++
    this.setState({subSets: this.state.subSets.push({id: this.state.counter}) })
  }
  render(){
    return(
      <div>
        {this.state.subSets.map( comp =>
          { return <NewSetComp id={comp.id} /> })
        }
        <button onClick = {(e) => this.buttonPress(e)}>+</button>
      </div>
    )
  }
}
