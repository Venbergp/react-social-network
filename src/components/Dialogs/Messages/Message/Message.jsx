import classNames from 'classnames'
import msg from './Message.module.css'

function Message(props) {
    return (
        <div className={msg.message + ' ' +  msg[props.from]}>
            {props["text"]}
        </div>
    )
  }
  

export default Message