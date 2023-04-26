import {useState} from "react";
import {BoardList} from "./components/BoardList.tsx";

export type Board = (number | null)[][]

const INITIAL_BOARD = [[3, 2, 1], [null, 5, 4], [7, 8, 6]]

export const App = () => {
  const [board, setBoard] = useState<Board>(INITIAL_BOARD)

  return (
      <div className='container'>
        <BoardList board={board}/>
      </div>
  )
}
