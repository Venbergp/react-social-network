const ADD_POST = "ADD-POST"
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT"

let initialState = {
    newPostText: "",
    postsData: [
        { id: 1, message: "Post1" },
        { id: 2, message: "Post2" },
        { id: 3, message: "Post3" }
        ] 
}

const profileReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText
            }
            state.postsData.unshift(newPost)
            state.newPostText = ''
            return state
        
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.text
            return state
        
        default:
            return state
    }
    
}

export let addPostActionCreator = () => {
    return(
        {
            type: ADD_POST
        })
}

export let changeNewPostTextActionCreator = (PostText) => {
    return (
        {
            type: CHANGE_NEW_POST_TEXT, 
            text: PostText
        }
    )
}

export default profileReducer