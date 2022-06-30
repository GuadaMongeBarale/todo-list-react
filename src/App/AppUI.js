import { useContext} from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";


import './App.css';

function AppUI() {
    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal
    } = useContext(TodoContext)
    return (
        <>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
            {error  && <p>Hubo un error</p>}
            {loading  && <p>Estamos cargando...</p>}
            { searchedTodos.map( todo => (
            <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={()=>completeTodo(todo.text)}
                onDeleted={()=>deleteTodo(todo.text)}
            />
            ))}
        </TodoList>
        {!!openModal && (
            <Modal>
                <TodoForm />
            </Modal>
        )}
        
        <CreateTodoButton
        setOpenModal={setOpenModal}
        />
            
        </>
    )
}

export {AppUI} 
