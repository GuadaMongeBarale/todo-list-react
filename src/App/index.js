import { useTodos } from "../hooks/context";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";
import { TodoError } from "../components/TodoError";
import { TodoLoading } from "../components/TodoLoading";
import { ChangeAlert } from "../components/ChangeAlert";

import './App.css';

function App() {
    const {
        error, 
        loading, 
        searchedTodos,
        totalTodos, 
        completedTodos,  
        completeTodo, 
        deleteTodo,
        search,
        setSearch, 
        openModal,
        setOpenModal,
        addTodo, 
        syncUp
    } = useTodos()
    return (
        <>
        <ChangeAlert
            syncUp={syncUp}
        />
        <TodoCounter        
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            loading={loading}
        />
        <TodoSearch
            search={search}
            setSearch={setSearch}
            totalTodos={totalTodos}
            loading={loading}
        />
        <TodoList
            error={error}
            loading={loading}
            search={search}
            searchedTodos={searchedTodos}
            onError={()=> <TodoError />}
            onLoading={()=> <TodoLoading />}
            render={todo=>(
                <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={()=>completeTodo(todo.text)}
                onDeleted={()=>deleteTodo(todo.text)}
                />
            )}
        />

        {!!openModal && (
            <Modal>
                <TodoForm
                    addTodo={addTodo} 
                    setOpenModal={setOpenModal}
                />
            </Modal>
        )}
        
        <CreateTodoButton
            setOpenModal={setOpenModal}
        />

        </>
    )
}

export {App} 
