import React from 'react'
import { useStorageListener } from "../../hooks/useStorageAlert"
import './style.css'

function ChangeAlert({syncUp}) {

    const {show, toggleShow} = useStorageListener(syncUp)

    if (show) {
        return (
            <div className='changes'>
                <button
                onClick={()=> toggleShow(false)}
                >
                    Actualizar
                </button>
            </div>
        )
    }
}

export {ChangeAlert}
