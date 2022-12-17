import prr from './Profile.module.css'
import MyPosts from './Myposts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'


function Profile(props) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts {...props} dispatch = { props.dispatch }/>
        </div>
    )
  }
  

export default Profile