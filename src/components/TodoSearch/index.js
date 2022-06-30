import { useContext } from 'react'
import { TodoContext } from '../../TodoContext'
import './Search.css'

function TodoSearch() {
    const { search, setSearch, loading, totalTodos} = useContext(TodoContext)
    const onSearchValue = (event) => {
        setSearch(event.target.value)
    }
    if (!loading && !totalTodos) {
        return (
            <article className='TodoSearch'>
                <p>Click en el Botón de abajo </p> 
            </article>
        )
    } 
    else {
        return (
            <input className='TodoSearch' 
            placeholder="Busca un TODO" 
            value={ search }
            onChange={ onSearchValue }
            />
        )
    }
}

export { TodoSearch } 