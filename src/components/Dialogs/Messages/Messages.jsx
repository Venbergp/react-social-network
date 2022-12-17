import msgs from './Messages.module.css'
import Message from './Message/Message'
import React from 'react'
import { changeNewMessageTextActionCreator, addMessageActionCreator } from '../../../redux/dialogs-reducer'

function Messages(props) {


    let messagesElements = props.dialogData.messagesData.map( 
        el => 
        <div className={msgs[el.from]}>
            <Message id={el.id} text={el.text} from={el.from}/> 
        </div>
        )

    let messageText = React.useRef()

    let onChange = () => {
        let text = messageText.current.value
        let user_id = props.dialogData.user_id
        console.log(text)
        props.dispatch(changeNewMessageTextActionCreator(text, user_id))
    }

    let addMessage = () => {
        props.dispatch(addMessageActionCreator(props.dialogData.user_id))
    }
    
    
    return (
        
        <div className={msgs.messages}>
            { messagesElements } 
            <div className={msgs.sendMessageBlock}>
                <textarea ref={messageText} className={msgs.textInput} value={props.dialogData.newMessageText} placeholder="сообщение" onChange={ onChange }>
                    
                </textarea>
                
                <button className={msgs.buttonSend} onClick={ addMessage }> Отправить</button>
            </div>
        </div>
        )
}


export default Messages