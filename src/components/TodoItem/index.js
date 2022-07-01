import React from 'react'
import './Item.css'

function TodoItem(props) {
    
    return (
        <li className="TodoItem">
            <span 
            title='Pulsa para marcar como completada la tarea'
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={ props.onComplete }>
            √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}
            </p>
            <span 
            title='Pulsa para eliminar esta tarea'
            className="Icon Icon-delete"
            onClick={ props.onDeleted }>
            X
            </span>
        </li>
    )
}

export { TodoItem } 