import {useEffect, useState} from "react";
import {BoardList} from "./components/BoardList.tsx";
import {isCellNearNullRow} from "./utils/isCellNearNullRow.ts";
import {generateBoard} from "./utils/generateBoard.ts";
import {hasWon} from "./utils/hasWon.ts";
import {useDelay} from "./hooks/useDelay.ts";

export type Board = (number | null)[][]

export const App = () => {
  const {isDelaying, delay} = useDelay()
  const [board, setBoard] = useState<Board>(() => generateBoard())
  const [isHighlighted, setIsHighlighted] = useState(false)

  const higlightHellCellHandler = () => {
    setIsHighlighted(prevValue => !prevValue)

    delay(3000, () => setIsHighlighted(prevValue => !prevValue))
  }

  const moveCellHandler = (row: number, column: number) => {
    const nullRow = board.findIndex(row => row.includes(null))
    const nullColumn = board[nullRow].findIndex(column => !column)

    const CAN_GO_HORIZONTALLY = nullRow === row && isCellNearNullRow(nullColumn, column)
    const CAN_GO_VERTICALLY = nullColumn === column && isCellNearNullRow(nullRow, row)

    if (CAN_GO_HORIZONTALLY) {
      const newBoard = [...board]

      newBoard[nullRow][nullColumn] = newBoard[nullRow][column]
      newBoard[nullRow][column] = null

      setBoard(newBoard)
    }
    if (CAN_GO_VERTICALLY) {
      const newBoard = [...board]

      newBoard[nullRow][nullColumn] = newBoard[row][column]
      newBoard[row][column] = null

      setBoard(newBoard)
    }
  }

  useEffect(() => {
    console.log(hasWon(board))
  }, [board])

  return (
      <div className='container'>
        <BoardList
            board={board}
            isHighlighted={isHighlighted}
            moveCellHandler={moveCellHandler}
        />
        <div className="buttons">
          <button onClick={() => setBoard(generateBoard)}>Shuffle</button>
          <button
              disabled={isDelaying}
              className={isHighlighted ? 'active-cell' : ''}
              onClick={higlightHellCellHandler}>Highlight</button>
        </div>
      </div>
  )
}
