import { useContext } from 'react'
import { TodoContext } from '../../TodoContext'
import './Search.css'

function TodoSearch() {
    const { search, setSearch } = useContext(TodoContext)
    const onSearchValue = (event) => {
        setSearch(event.target.value)
    }
    return (
        <input className='TodoSearch' 
        placeholder="Busca un TODO" 
        value={ search }
        onChange={ onSearchValue }
        />
    )
}

export { TodoSearch } 