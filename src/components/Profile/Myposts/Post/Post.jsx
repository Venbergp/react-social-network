import p from './Post.module.css'

function Post(props) {
    return (
        <div className={p.item}>
            {props["message"]}
        </div>    
    )
  }
  

export default  Post