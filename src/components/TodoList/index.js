import React from 'react'
import './List.css'

function TodoList(props) {
    return (
        <section className='TodoList'>
        {props.error && props.onError() }
        {props.loading && props.onLoading()}
            <ul>
                {!props.loading && props.searchedTodos.map(props.render)}
            </ul>
        </section>
    )
}

export { TodoList } 