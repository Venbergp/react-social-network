import s13 from './Seminar13.module.css'
import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import HomeButton from '../HomeButton/HomeButton';

function Seminar13(props) {
    
    return (
        <div>
            <HomeButton/>
            <div className={s13.paper}>
                <p> Функция записи дел у меня реализована на странице профиля, можно добавлять новые материалы </p>
                <Link className={s13.button} to='/profile'> Перейти к странице профиля</Link>
            </div>
        </div>
    )
}


export default Seminar13