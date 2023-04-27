import {useEffect, useState} from "react";
import {generateBoard} from "../utils/generateBoard.ts";
import {Board} from "../App.tsx";
import {useDelay} from "./useDelay.ts";
import {isCellNearNullRow} from "../utils/isCellNearNullRow.ts";
import {hasWon} from "../utils/hasWon.ts";

export const useBoard = () => {
    const {isDelaying, delay} = useDelay()
    const [isHighlighted, setIsHighlighted] = useState(false)
    const [board, setBoard] = useState<Board>(() => generateBoard())

    useEffect(() => {
        console.log(hasWon(board))
    }, [board])

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

    const higlightHellCellHandler = () => {
        setIsHighlighted(prevValue => !prevValue)

        delay(3000, () => setIsHighlighted(prevValue => !prevValue))
    }

    const generateNewBoard = () => {
        setBoard(generateBoard)
    }

    return {
        board,
        higlightHellCellHandler,
        isHighlighted,
        isDelaying,
        moveCellHandler,
        generateNewBoard
    }
}