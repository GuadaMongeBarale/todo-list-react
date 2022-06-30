import React from 'react'
import './Button.css'

function CreateTodoButton(props) {
    const onClickBtn = () => {
        props.setOpenModal(prevState => !prevState)
    }
    return (
        <button 
        className='CreateTodoButton'
        title='Clica para abrir o cerrar al anotador de TODOs'
        onClick={ onClickBtn }
        >+</button>
    )
}

export { CreateTodoButton } 