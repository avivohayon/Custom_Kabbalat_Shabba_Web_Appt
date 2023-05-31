import { useEffect, useState } from "react";

// custom hook for saving items after refresh. can take as input "initialValue" any type or a func  that retrun that type
export function useLocalStorage(key, initialValue) {
    // we want to invoke cheacking our local storage only one time when we needed and not always for better preformence
    const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key)
        if(jsonValue != null) return JSON.parse(jsonValue)
        // inorder to use UseLocalStorage generecly in ImageCartContext we need to know first if we its return value as a func or not
        if(typeof initialValue === "function") {
            return initialValue()
        } else {
            return initialValue
        }
    }) 
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    
    return [value, setValue]
}