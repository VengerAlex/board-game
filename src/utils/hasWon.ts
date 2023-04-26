import {Board} from "../App.tsx";

export const hasWon = (board: Board) => {
    const flattenArray = board
        .flat()
        .splice(-1)

    for (let i = 0; i < flattenArray.length; i++) {
        const currentElement = flattenArray[i]
        const nextElement = flattenArray[i + 1]

        if (currentElement && currentElement + 1 !== nextElement) return false
    }

    return true
}
