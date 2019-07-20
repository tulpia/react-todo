import React from 'react'

const Todo = ({ todo, handleDelete, index }) => {
    return (
        <article className="todo-single">
            <p className="todo-single__index">{index}</p>
            <p className="todo-single__todo">{todo}</p>
            <div className="todo-single__delete" onClick={handleDelete}>
                <p>delete</p>
            </div>
        </article>
    )
}

export default Todo
