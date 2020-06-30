
const initState = {
    posts: [
        {id:"1", title:"title1"},
        {id:"2", title:"title2"},
        {id:"3", title:"title3"},
    ]
}

const rootReducer = (state = initState, action) =>{
    
    if (action.type === "DELETE_POST"){
        let newPosts = state.posts.filter(post => post.id !== action.id);

        return{
            ...state,
            posts: newPosts
        }
    }

    return state;
}

export default rootReducer;