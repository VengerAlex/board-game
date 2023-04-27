import {useState} from "react";

export const useDelay = () => {
    const [isDelaying, setIsDelaying] = useState(false)

    const delay = (time: number, cb: () => void) => {
        setIsDelaying(true)

        setTimeout(() => {
            setIsDelaying(false)
            cb()
        }, time)
    }


    return {isDelaying, delay}
}