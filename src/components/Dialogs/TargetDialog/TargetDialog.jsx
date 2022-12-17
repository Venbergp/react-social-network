import { NavLink } from 'react-router-dom'
import dlgg from './TargetDialog.module.css'

function TargetDialog(props) {
    return (
        <NavLink to={"/dialogs/" + props["user_id"]} className={(NavData => NavData.isActive ? dlgg.Activate : dlgg.unActivate)}> 
            <div className={dlgg.dialogItem}> 
                {props["name"]} 
            </div> 
        </NavLink>
        
    )
  }
  

export default TargetDialog