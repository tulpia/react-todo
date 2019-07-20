import React from 'react'

const InputTodo = ({ handleSubmit, title, handleTitle }) => {
    return (
        <div className="input-todo">
            <form onSubmit={handleSubmit}>
                <input 
                    type= 'text'
                    name= 'todoText'
                    value={title}
                    onChange={handleTitle}
                    className="input-todo__text"
                    placeholder="Ajouter un todo"
                />
                <button 
                    type="submit"
                    className="input-todo__submit"
                >
                    <p>Valider</p>
                </button>
            </form>
        </div>
    )
}

export default InputTodo
