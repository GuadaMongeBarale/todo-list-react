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
                title='Has click para escribir tu tarea'
                value={newTodoValue}
                onChange={onChange}
                placeholder='Tomar agua'
            />
            <div className='TodoForm-buttonContainer'>
                <button
                title='Con un click aquí volverás a la pantalla principal sin guardar información'
                className='TodoForm-button TodoForm-button--cancel'
                type='button'
                onClick={onCancel}
                >Cancelar</button>
                <button
                title='Guardaras en un almacenamiento local'
                className='TodoForm-button TodoForm-button--add'
                type='submit'
                >Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm}