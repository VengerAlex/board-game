import {FC} from "react";
import {Board} from "../App.tsx";

interface BoardListProps {
    board: Board,
    moveCellHandler: (row: number, column: number) => void
}

export const BoardList: FC<BoardListProps> = ({board, moveCellHandler}) => {
    return (
        <div className="board">
            {board.map((row, rowIndex) =>
                row.map((column, columnIndex) => {
                    return <button
                        className={!column ? 'active-cell' : ''}
                        key={rowIndex + columnIndex}
                        onClick={() => moveCellHandler(rowIndex, columnIndex)}>
                        {column}
                    </button>}
                )
            )}
        </div>
    )
}
