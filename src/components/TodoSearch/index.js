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
            <input
            title='Has click aquí y presiona alguna letra.
            Debajo aparecerán los TODO que contengan esa letra o palabra.'
            className='TodoSearch' 
            placeholder="Busca un TODO" 
            value={ search }
            onChange={ onSearchValue }
            />
        )
    }
}

export { TodoSearch } 