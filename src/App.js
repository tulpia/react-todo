import React from 'react';
import './App.scss';
import Title from './components/Title/Title'
import Todos from './components/Todos/Todos'

/*
TODO : Un todo

1/ Creer un component title (pour le titre en haut qui dira 'TODO, Made in React)
2/ Creer un component Todos, qui contiendra le state et une loop sur celui-ci
3/ Creer un component Todo, qui contiendra la template d'un single todo
4/ Creer des Buttons pour Supprimer le todo, l'editer
*/

function App() {
  return (
    <div className="App">
      <Title />
      <Todos />
    </div>
  );
}

export default App;
