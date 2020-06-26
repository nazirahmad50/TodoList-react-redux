import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";




class App extends Component{

  state = {
    todos:[
      {id:1, content:"buy some milk"},
      {id:2, content:"play game"}
    ]
  }

  deleteTodo = (id) =>{
    // if a todo id is not equal to the recievd id then return true and dont remove it otherwise remove it
    const todos = this.state.todos.filter(todo => todo.id !== id);
    
    // update the todos list
    this.setState({
      todos
    })
  }

  addTodo = (todo) =>{
    // add a random id to the new recieved todo
    todo.id = Math.random();

    // use destructuring
    // store the old todos list and add the new todo
    let todos = [...this.state.todos, todo];

    this.setState({
      todos
    })

  }

  render(){
    return (
      <div className="todo-app container">
        <BrowserRouter>
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </BrowserRouter>
        <h1 className="center blue-text">Tods's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
