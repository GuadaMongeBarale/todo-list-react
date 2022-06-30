import { useContext, useState } from 'react'
import { TodoContext } from '../../TodoContext'
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = useState('')
    const { addTodo, setOpenModal } = useContext(TodoContext)
    const onCancel = () => {
        setOpenModal(false)
    }
    const onChange= (event) => {
        setNewTodoValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Tomar agua'
            />
            <div className='TodoForm-buttonContainer'>
                <button 
                className='TodoForm-button TodoForm-button--cancel'
                type='button'
                onClick={onCancel}
                >Cancelar</button>
                <button
                className='TodoForm-button TodoForm-button--add'
                type='submit'
                >Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm}