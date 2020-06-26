import React, { Component } from 'react';
import Todos from "./Todos";

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

  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Tods's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
