import prrInf from './ProfileInfo.module.css'


function ProfileInfo() {
    return (
        <div>
            <div>
                <img className={prrInf.ProfileAva} src='https://habrastorage.org/storage2/da9/1a0/5f3/da91a05f3c013ef5bb76bf328e8eb1b1.png' />
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
  }
  

export default ProfileInfo