import dlg from './Dialogs.module.css'
import TargetDialog from './TargetDialog/TargetDialog'
import React from 'react'
import Messages from './Messages/Messages'
import { Route, Routes } from 'react-router';

function Dialogs(props) {
    let dialogsElements = props.dialogsData.map( el => <TargetDialog user_id={el.user_id} name={el.name} />)

       
    let messagesInDialog = props.dialogsData.map( el => 
            <Route path={'/' + el.user_id + '/*'} element={<Messages dialogData = {el} dispatch={ props.dispatch } /> }/>
        )   

    return (
        <div className={dlg.dialogs}>
            <div className={dlg.dialogsItems}>
                { dialogsElements }
            </div>
            <Routes>
                { messagesInDialog }
            </Routes>
            
        </div>
    )
}


export default Dialogs