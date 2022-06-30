import { useContext } from 'react'
import { TodoContext } from '../../TodoContext'
import './Search.css'

function TodoSearch() {
    const { search, setSearch, loading, searchedTodos } = useContext(TodoContext)
    const onSearchValue = (event) => {
        setSearch(event.target.value)
    }
    if (!loading && !searchedTodos.length) {
        return (
            <article className='TodoSearch'>
                <p>Click en el Botón de abajo </p> 
            </article>
        )
    } else {
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