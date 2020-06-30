import React, { Component } from "react";
import {Link} from "react-router-dom";
import Pokeball from "../pokeball.png";
import {connect} from "react-redux";

// convert to class instead of func because funcs cant use lifecycle hooks such as 'componentDidMount'
 class Home extends Component{
     render(){
        const {posts} = this.props;
        const postLst = posts.length ? (
           posts.map(post =>{
               return(
                <div className="post card" key={post.id}>
                    <img src={Pokeball}></img>
                    <div className="card-content">
                        <Link to={"/" + post.id}>
                            <span className="card-title">{post.title}</span>
                        </Link>
                         <p>{post.body}</p>
                    </div>
                </div>
               )
           })
        ) 
        :(
            <div className="center">No posts</div>
        )

        return(
            <div className="container home">
                <h4 className="center">Home</h4>
                {postLst}
            </div>
        )
     }
 
}

const mapStateToProps = (state) =>{
    return{
        posts: state.posts
    }
}

// 'connect' return a HOC then the Home comp is wrapped in that returned HOC
export default connect(mapStateToProps)(Home);