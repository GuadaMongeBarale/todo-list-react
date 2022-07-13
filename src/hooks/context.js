import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";


function useTodos() {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
        syncUp
    } = useLocalStorage('TODOS_V1', [])
    
    const [openModal, setOpenModal] = useState(false)
    
    const [search, setSearch] = useState(''); 
    
    const completedTodos = todos.filter( todo => todo.completed).length
    const totalTodos = todos.length
    
    let searchedTodos = []
    if (!search.length >= 1) {
        searchedTodos = todos
    }
    else {
        searchedTodos = todos.filter( todo => {
        const todoText = todo.text.toLocaleLowerCase()
        const searchText = search.toLocaleLowerCase()
        return todoText.includes(searchText)
        })
    }

    const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            completed:false,
            text,
        })
        saveTodos(newTodos)
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex( todo => todo.text === text )
        const newTodos = [...todos]
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos)
    }
    
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex( todo => todo.text === text )
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    return {
            loading,
            error,
            totalTodos,
            completedTodos,
            search,
            setSearch,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            syncUp
        }

}

export { useTodos }

