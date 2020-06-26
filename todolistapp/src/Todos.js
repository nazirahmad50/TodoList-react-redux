import React from "react";

// its going to be a func component as we dont need ot use state
// use destructering for the props in func param
const Todos = ({todos, deleteTodo}) =>{

    const todoLst = todos.length ? (
        todos.map(todo =>{
            return(
                // react expects a unique key on every sorounding element that we return inside map func
                // so it can identiy each item and perform DOM manipulation
                <div className="collection-item" key={todo.id}>
                    <span onClick={() =>{deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    )
    // if empty todos list 
    : 
    (
        <p className="center">You have not todos left</p>
    )

    // return template jsx
    return(
        <div className="todos collection">
            {todoLst}
        </div>
    )
}

export default Todos;