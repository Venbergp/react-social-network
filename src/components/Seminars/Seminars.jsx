import smrs from './Seminars.module.css'
import React from 'react'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import TargetSeminar from './TargetSeminar/TargetSeminar';
import HomeButton from './HomeButton/HomeButton';
import Seminar9 from './Seminar9/Seminar9';
import Seminar10 from './Seminar10/Seminar10';
import Seminar11 from './Seminar11/Seminar11';
import Seminar12 from './Seminar12/Seminar12';
import Seminar13 from './Seminar13/Seminar13';
import Seminar14 from './Seminar14/Seminar14';
import Seminar15 from './Seminar15/Seminar15';
import Seminar16 from './Seminar16/Seminar16';
import { changeFilterTextActionCreator } from '../../redux/seminars-reducer';


function Seminars(props) {
  
    let seminarsTargets = props.seminars.filter(el => el.name.toUpperCase().includes(props.filterText.toUpperCase()))
    console.log(seminarsTargets)
    seminarsTargets = seminarsTargets.map(
        el =>
         <TargetSeminar {...el} /> 
    )

    let filterText = React.useRef()

    let onChange = () => {
        let text = filterText.current.value
        console.log(text)
        props.dispatch(changeFilterTextActionCreator(text))
    }

    return (
        <div>
            <Routes>
                <Route path={'/'} element={ <textarea className={smrs.inputText} ref={filterText} placeholder="Поиск" onChange={onChange} value={props.filterText}/>} />    
            </Routes>
            <div className={smrs.seminarsArea}>
                <Routes>
                    <Route path={'/'} element={ seminarsTargets } />
                    <Route path={'/9' } element={<Seminar9/>} />
                    <Route path={'/10' } element={<Seminar10/>} />
                    <Route path={'/11' } element={<Seminar11/>} />
                    <Route path={'/12' } element={<Seminar12/>} />
                    <Route path={'/13' } element={<Seminar13/>} />
                    <Route path={'/14' } element={<Seminar14/>} />
                    <Route path={'/15' } element={<Seminar15/>} />
                    <Route path={'/16' } element={<Seminar16/>} />
                </Routes>
                
            </div>
        </div>
    )
}


export default Seminars