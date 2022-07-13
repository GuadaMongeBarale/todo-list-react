import React from 'react'
import './style.css'

function TodoLoading() {
    return (
        <article className="LoadingTodo-container">
        <p className="LoadingTodo-text">Cargando TODOs...</p>
        </article>
    );
}

export { TodoLoading }