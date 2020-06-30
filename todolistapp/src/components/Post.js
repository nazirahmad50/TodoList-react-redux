import React, { Component } from "react";
import {connect} from "react-redux";
import {deletePost} from "../actions/postAction";
class Post extends Component{

    HandleClick = () =>{
        this.props.deletePost(this.props.post.id);
        // redirect to homepage
        this.props.history.push("/");
    }

    render(){

        const post = this.props.post ? (
            <div className="post">
                <h2 className="center">{this.props.post.title}</h2>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.HandleClick}>DELETE Post</button>
                </div>
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

// 'ownProps' are the props that already exist in the class such as the router props
const mapStateToProps = (state, ownProps) =>{
    let id = ownProps.match.params.post_id;

    return{
        post: state.posts.find(x => x.id === id)
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        // dispatch an aciton via 'deletePost' func to root reducer
        // pass id as additional payload data
        deletePost: (id) =>{dispatch(deletePost(id))}
    }
}

// map state to props comes first
export default connect(mapStateToProps, mapDispatchToProps)(Post);