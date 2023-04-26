import {useState} from "react";

type Board = (number | null)[][]

const INITIAL_BOARD = [[3, 2, 1], [null, 5, 4], [7, 8, 6]]

export const App = () => {
  const [board, setBoard] = useState<Board>(INITIAL_BOARD)

  return (
      <div className='container'>
        <div className="board">
          {board.map(row => row.map(column => <button>{column}</button>))}
        </div>
      </div>
  )
}
