import {useState, useEffect} from 'react'

function useStorageListener(syncUp) {

        const [storageChange, setStorageChange] = useState(false)

        useEffect(() => {
            const onChange = (change) => {
                if (change.key === "TODOS_V1") {
                    setStorageChange(true);
                }
            }
            window.addEventListener('storage', onChange)
            return () => {
                window.removeEventListener('storage', onChange)
            }
        }, [storageChange])

        const toggleShow = () => {
            syncUp()
            setStorageChange(false)
        }

        return {
            show:storageChange,
            toggleShow,
        }
}

export { useStorageListener}