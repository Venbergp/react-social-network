import s11 from './Seminar11.module.css'
import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import HomeButton from '../HomeButton/HomeButton';

function Seminar11(props) {
    
    return (
        <div>
            <HomeButton/>
        
            <div className={s11.paper}>
                <p> Можно зайти в VScode и посмотреть на всю структуру приложения </p>
            </div>
        </div>
    )
}


export default Seminar11