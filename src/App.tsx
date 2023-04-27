import {BoardList} from "./components/BoardList.tsx";
import {useBoard} from "./hooks/useBoard.ts";

export type Board = (number | null)[][]

export const App = () => {
  const {
      board,
      isHighlighted,
      moveCellHandler,
      generateNewBoard,
      isDelaying,
      higlightHellCellHandler
  } = useBoard()

  return (
      <div className='container'>
        <BoardList
            board={board}
            isHighlighted={isHighlighted}
            moveCellHandler={moveCellHandler}
        />
        <div className="buttons">
          <button onClick={generateNewBoard}>Shuffle</button>
          <button
              disabled={isDelaying}
              className={'active-cell'}
              onClick={higlightHellCellHandler}>Highlight</button>
        </div>
      </div>
  )
}
