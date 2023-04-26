import {Board} from "../App.tsx";

export const generateBoard = () => {
    const result: Board = []

    const arrayOfElements = [...Array
        .from({length: 8}, (_, i) => i + 1), null]
        .sort(() => Math.random() - 0.5)

    for (let i = 0; i < 3; i++) {
        result.push(arrayOfElements.splice(0, 3))
    }

    return result
}
