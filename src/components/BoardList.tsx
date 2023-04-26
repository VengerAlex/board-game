import {FC} from "react";
import {Board} from "../App.tsx";

interface BoardListProps {
    board: Board
}

export const BoardList: FC<BoardListProps> = ({board}) => {
    return (
        <div className="board">
            {board.map(row => row.map(column => <button>{column}</button>))}
        </div>
    )
}
