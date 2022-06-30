import React from 'react'
import './Button.css'

function CreateTodoButton(props) {
    const onClickBtn = () => {
        props.setOpenModal(prevState => !prevState)
    }
    return (
        <button 
        className='CreateTodoButton'
        onClick={ onClickBtn }
        >+</button>
    )
}

export { CreateTodoButton } 