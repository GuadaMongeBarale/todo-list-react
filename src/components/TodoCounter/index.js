import './Counter.css';

function TodoCounter({loading, totalTodos, completedTodos}) {
    if (!loading && !totalTodos) {
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