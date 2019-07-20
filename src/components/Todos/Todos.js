import React from 'react'
import Todo from './Todo/Todo'
import InputTodo from './InputTodo/InputTodo'

const todos = [
]

class Todos extends React.Component
{
    state = {
        todos,
        title: ''
    }

    // ajouter un todo
    handleTodoAdd = event => {
        // premierement, on empêche le comportement normal du formulaire
        event.preventDefault()
        
        // Puis, on copie le state pour plus tard le changer dans un setState
        const todos = [ ...this.state.todos ]

        // On créé une variable temporaire contenant la value de l'input pour ensuite l'ajouter dans le state en faisant un push
        const todoAdded = { 'todo': this.state.title }
        todos.push(todoAdded)
        this.setState({
            todos
        })

        // On reset la value de title pour vider le champ texte
        this.setState({
            title: ''
        })
    }

    handleTitle = event => {
        this.setState({
            title: event.target.value
        })
    }

    // Supprimer le todo au on click
    handleDelete = index => {
        const todos = [ ...this.state.todos ]
        todos.splice(index, 1)

        this.setState({
            todos
        })
    }

    render() {
        return (
            <section className="Todos">
                {this.state.todos.map((value, index) => 
                    <Todo
                    key={index}
                    index={index}
                    todo={value.todo}
                    handleDelete={(e) => this.handleDelete(index)} />
                )}

                <InputTodo
                    title={this.state.title}
                    handleSubmit={this.handleTodoAdd}
                    handleTitle={this.handleTitle}
                />
            </section>
        )
    }
}

export default Todos