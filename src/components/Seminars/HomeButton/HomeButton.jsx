import hb from './HomeButton.module.css'
import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';

function HomeButton(props) {
    
    return (
        <Link className={hb.linkStyle} to={'/seminars'}>
            <div className={hb.button}>
                <div className={hb.seminarName}> Вернуться к семинарам</div>
            </div>
        </Link>
    )
}


export default HomeButton