import React from 'react'
import Todo from './Todo/Todo'
import InputTodo from './InputTodo/InputTodo'

// Firebase
import base from '../../base'

class Todos extends React.Component
{
    constructor(props) {
        super(props);
    
        this.state = {
            todos: {},
            title: ''
        }
    }

    // Firebase
    // Une sorte de two-way binding de notre state à firebase
    // Re-base permet de garder à jour le state par rapport a la bdd et vice-versa
    // Sans écrire de code
    componentDidMount () {
        base.syncState('/', {
            context: this,
            state: 'todos'
        })
    }


    // ajouter un todo
    handleTodoAdd = event => {
        // premierement, on empêche le comportement normal du formulaire
        event.preventDefault()
        
        // Puis, on copie le state pour plus tard le changer dans un setState
        const todos = { ...this.state.todos }

        // On créé une variable temporaire contenant la value de l'input pour ensuite l'ajouter dans le state en faisant un push
        const todoAdded = { todo: this.state.title }

        todos[`todo-${Date.now()}`] = todoAdded
        
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
        const todos = { ...this.state.todos }
        todos[index] = null

        this.setState({
            todos
        })
    }

    render() {
        return (
            <section className="Todos">
                {Object
                    .keys(this.state.todos)
                    .map((cle, index) =>
                        <Todo
                        key={cle}
                        index={index}
                        todo={this.state.todos[cle].todo}
                        handleDelete={(e) => this.handleDelete(cle)} />
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