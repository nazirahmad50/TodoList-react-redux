import React, { Component } from "react";
import axios from "axios";

class Post extends Component{

    state = {
        post:null
    }

    componentDidMount(){
        // we automatically get props in class based comp 
        // so we get the route info becuase its used as route in app.js
        let id = this.props.match.params.post_id;
       
        axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
        .then(res =>{
            // when the state is updated reatc call render
           this.setState({
               post: res.data
           })
        })
    }
    render(){

        const post = this.state.post ? (
            <div className="post">
                <h2 className="center">{this.state.post.title}</h2>
                <p>{this.state.post.body}</p>
            </div>
         ) 
        :(
            <div className="center">loading Post...</div>
        )

        return(
            <div className="container">
                {post}
            </div>
        )
    }

}

export default Post;