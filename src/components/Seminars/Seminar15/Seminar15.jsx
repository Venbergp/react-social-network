import s15 from './Seminar15.module.css'
import React from 'react'
import { Route, Routes } from 'react-router';
import { Link, Navigate } from 'react-router-dom';
import HomeButton from '../HomeButton/HomeButton';
import TextVx from './TextVx/TextVx';



function CheckLogin(props) {
    
    debugger;
    if (props.text == "Login") {
        return <TextVx text={props.text}/>
    } else {
        return <Navigate to="/profile" />
    }
}

function Seminar15(props) {
    const [login, setLogin] = React.useState("Login")
    const [btnText, setBtnText] = React.useState("unLogin")
    const onClick = () => {
        login == "Login" && setLogin("unLogin") || login == 'unLogin' && setLogin("Login")
        btnText == "Login" && setBtnText("unLogin") || btnText == 'unLogin' && setBtnText("Login")
    }
    
    return (
        <div>
            <HomeButton />
            <div className={s15.paper}>
                <p> С помощью компоненты высшего порядка слежу залогинен пользователь или нет, если он вышел, </p>
                <p> то перенаправляю его на страницу профиля </p>
                <br/>
                <CheckLogin text={ login }/>
                <button onClick={onClick}> {btnText} </button>
            </div>
        </div>
    )
}


export default Seminar15