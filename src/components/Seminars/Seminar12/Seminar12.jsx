import s12 from './Seminar12.module.css'
import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import HomeButton from '../HomeButton/HomeButton';

function Seminar12(props) {
    
    return (
        <div>
            <HomeButton/>
            <div className={s12.paper}>
                <p> Я сделал список семинаров, как магазин с возможностью поиска и фильтрации по нужным словам </p>
            </div>
        </div>
    )
}


export default Seminar12