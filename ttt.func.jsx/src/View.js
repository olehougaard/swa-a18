import React from 'react';
import ReactDOM from 'react-dom';
import './View.css';

const Message = ({winner, player}) => {
  if (winner)
      return <p>{winner.winner + ' won!'}</p>
  else    
      return <p>{'Your turn, ' + player}</p>
}        

const Board = ({ board, dispatch}) =>
  <table>
      <tbody>
          {board.map((row, i) =>
          <tr key={i}>{row.map ( (tile, j) => 
              <td key={i+''+j}
                  className={tile || 'blank'}
                  onClick= {() => dispatch({type:'move', x: i, y: j})}/>)
              }</tr>
          )}
      </tbody>
  </table>

const View = ({ model, dispatch }) => (
  <div> 
    <h1>Tic-tac-toe</h1>
      <Message winner={model.winner()} player={model.playerInTurn()}/>
      <Board board={model.board} dispatch = {dispatch}/>
    <button id = 'reset' onClick = {() => dispatch({type: "reset"})}>Reset</button>
  </div>
)

const render = dispatch => model => ReactDOM.render(<View model={ model } dispatch = {dispatch} />, document.getElementById('root'));

export default render;
