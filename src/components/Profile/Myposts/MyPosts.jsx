import React from 'react'
import { addPostActionCreator, changeNewPostTextActionCreator } from '../../../redux/profile-reducer'
import Post from './Post/Post'

function MyPosts(props) {

    let PostsDataElements = props.postsData.map( el => <Post message={el.message} id={el.id}/>) 


    let newPostElement = React.useRef()

    let onChange = () => {
        let PostText = newPostElement.current.value
        debugger;
        props.dispatch(changeNewPostTextActionCreator(PostText))
        console.log(PostText)
    }

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    return (
        <div>
            my posts
            <div>
                <textarea onChange={ onChange } ref={newPostElement} value={props.newPostText} placeholder='Начните писать свой пост'/>

                <button onClick={ addPost }> Опубликовать </button>
            </div>

            {PostsDataElements}

        </div>
    )
}
  


export default  MyPosts