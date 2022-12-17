import s14 from './Seminar14.module.css'
import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import HomeButton from '../HomeButton/HomeButton';

function Seminar14(props) {
    
    const [login, setLogin] = React.useState("unLogin")
    const [btnText, setBtnText] = React.useState("Login")

    const onClick = () => {
        login == "Login" && setLogin("unLogin") || login == 'unLogin' && setLogin("Login")
        btnText == "Login" && setBtnText("unLogin") || btnText == 'unLogin' && setBtnText("Login")
    }

    return (
        <div>
            <HomeButton/>
            <div className={s14.paper}>
                <p> Your status: { login } </p>
                <button onClick={onClick}> {btnText} </button>
            </div>
        </div>
    )
}


export default Seminar14