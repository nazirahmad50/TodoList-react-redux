import React, { Component } from "react";

class AddTodo extends Component{

    state = {
        content:""
    }

    handleChange = (e) =>{
        this.setState({
            content:e.target.value
        })
    }

    hanldeSubmit = (e) =>{
        e.preventDefault();

        this.props.addTodo(this.state);

       this.setState({
           content:""
       })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.hanldeSubmit}>
                    <label>Add New Todo</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}></input>
                </form>
            </div>
        )
    }
}

export default AddTodo;