import {FC} from "react";
import {Board} from "../App.tsx";
import {isCellNearNullRow} from "../utils/isCellNearNullRow.ts";

interface BoardListProps {
    board: Board,
    isHighlighted: boolean,
    moveCellHandler: (row: number, column: number) => void
}

export const BoardList: FC<BoardListProps> = ({board, moveCellHandler, isHighlighted}) => {
    return (
        <div className="board">
            {board.map((row, rowIndex) =>
                row.map((column, columnIndex) => {
                    const nullRow = board.findIndex(row => row.includes(null))
                    const nullColumn = board[nullRow].findIndex(column => !column)

                    const CAN_GO_HORIZONTALLY = nullRow === rowIndex && isCellNearNullRow(nullColumn, columnIndex)
                    const CAN_GO_VERTICALLY = nullColumn === columnIndex && isCellNearNullRow(nullRow, rowIndex)

                    return <button
                        className={!isHighlighted ? '' : CAN_GO_HORIZONTALLY  ? 'active-cell' : CAN_GO_VERTICALLY ? 'active-cell' : !column ? 'active-cell' : ''}
                        key={rowIndex + columnIndex}
                        onClick={() => moveCellHandler(rowIndex, columnIndex)}>
                        {column}
                    </button>}
                )
            )}
        </div>
    )
}
