import s10 from './Seminar10.module.css'
import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import HomeButton from '../HomeButton/HomeButton';

function Seminar10(props) {
    
    const [login, setLogin] = React.useState("unLogin")
    const [btnText, setBtnText] = React.useState("Login")
    const [count, setCount] = React.useState(0)

    const onClick = () => {
        if (login == "Login") {
            setLogin("unLogin")
        } else {
            setLogin("Login")
        }

        if (btnText == "Login") {
            setBtnText("unLogin")
        } else {
            setBtnText("Login")
        }
    }

    return (
        <div>
            <HomeButton/>
        
            <div className={s10.paper}>
                <p> Your status: { login } </p>
                <button onClick={onClick}> {btnText} </button>
                <p> Count: { count } </p>
                <button onClick={ () => {setCount(count + 1)} }> +1 </button>
            </div>
        </div>
    )
}


export default Seminar10