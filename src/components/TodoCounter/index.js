import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './Counter.css';

function TodoCounter() {
    const {totalTodos, completedTodos, loading, searchedTodos } = useContext(TodoContext)
    if (!loading && !searchedTodos.length) {
        return (
            <h2 className='TodoCounter'>Crea tu primer TODO 💪</h2>
        )
    } else {
        return (
            <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs 💪</h2>
        )
    }
}

export { TodoCounter } 