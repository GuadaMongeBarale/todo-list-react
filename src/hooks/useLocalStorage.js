import { useEffect, useState } from 'react'

function useLocalStorage(itemName, initialValue ) {
    const [synchronizedItem, setSynchronizedItem] = useState(true)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [item, setItem] = useState(initialValue);

    useEffect(()=>{
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                }

                setItem(parsedItem)
                setLoading(false)
                setSynchronizedItem(true)
            } catch (error) {
                setError(true)
            }
        }, 1000);
    }, [synchronizedItem])

    const saveItem = (newItem)=>{
        try {
            const stringTodo = JSON.stringify(newItem)
            localStorage.setItem(itemName, stringTodo)
            setItem(newItem)
        } catch (error) {
            setError(true)
        }
    }

    const syncUp = () => {
        setLoading(true)
        setSynchronizedItem(false)
    }

    return {item, saveItem, loading, error, syncUp}
}

export {useLocalStorage}