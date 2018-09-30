import React, { Component } from 'react';
import './App.css';
import model from './model'

class Message extends Component {
  render() {
    const winner = this.props.winner
    const player = this.props.player
    if (winner)
      return <p>{winner.winner + ' won!'}</p>
    else    
      return <p>{'Your turn, ' + player}</p>
  }
}

class Board extends Component {
  render() {
    const board = this.props.board
    const move = this.props.move
    return (
      <table>
      <tbody>
          {board.map((row, i) =>
          <tr key={i}>{row.map ( (tile, j) => 
              <td key={i+''+j}
                  className={tile || 'blank'}
                  onClick= {() => move(i, j)}/>)
              }</tr>
          )}
          </tbody>
      </table>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = model()
  }

  render() {
    const model = this.state
    return (
      <div> 
        <h1>Tic-tac-toe</h1>
          <Message winner={model.winner()} player={model.playerInTurn()}/>
          <Board board={model.board} move = {(x, y) => this.move(x, y)}/>
        <button id = 'reset' onClick = {() => this.resetBoard()}>Reset</button>
      </div>
    )
  }

  move(x, y) { 
    this.setState(state => state.legalMove(x, y) ? state.makeMove(x, y) : state)
  }

  resetBoard() {
    this.setState(state => state.clear())
  }
}

export default App;
