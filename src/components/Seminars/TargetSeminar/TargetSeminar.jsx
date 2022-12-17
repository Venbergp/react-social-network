import ts from './TargetSeminar.module.css'
import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';

function TargetSeminar(props) {
    
    return (
        <Link className={ts.linkStyle} to={'/seminars/' + props.number }>
            <div className={ts.dialog}>
                <div className={ts.seminarName}> {"Семинар номер " + props.number} </div>
                <div className={ts.seminarDescription}> {props.name}</div>
            </div>
        </Link>
    )
}


export default TargetSeminar