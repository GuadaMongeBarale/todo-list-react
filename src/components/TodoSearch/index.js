import './Search.css'

function TodoSearch({ search, setSearch, loading, totalTodos} ) {
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