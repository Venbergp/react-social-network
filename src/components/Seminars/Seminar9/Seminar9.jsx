import s9 from './Seminar9.module.css'
import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import HomeButton from '../HomeButton/HomeButton';

function Seminar9(props) {
    
    return (
        <div>
            <HomeButton/>
        
            <div className={s9.paper}>
                <p> Весь сайт в себе уже содержит множество компонент, связанных друг с другом по смыслу</p>
            </div>
        </div>
    )
}


export default Seminar9