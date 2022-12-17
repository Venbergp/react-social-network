import { NavLink } from 'react-router-dom'
import nv from './Navigation.module.css'


function NavBar() {
    return (
        <nav className={nv.Navigation}>
            <NavLink to="/profile" className={navData => navData.isActive ? nv.active: nv.unactive}> 
                <div className={nv.item}>
                    Profile 
                </div>
            </NavLink> 
            
            <NavLink to="/dialogs" className={navData => navData.isActive ? nv.active: nv.unactive}> 
                <div className={nv.item}>
                    Messages 
                </div>
            </NavLink> 

            <NavLink to="/news" className={navData => navData.isActive ? nv.active: nv.unactive}> 
                <div className={nv.item}>
                    News 
                </div>
            </NavLink> 

            <NavLink to="/music" className={navData => navData.isActive ? nv.active: nv.unactive}> 
                <div className={nv.item}>
                    Music 
                </div>
            </NavLink> 

            <NavLink to="/settings" className={navData => navData.isActive ? nv.active: nv.unactive}> 
                <div className={nv.item}>
                    Settings 
                </div>
            </NavLink> 

            <NavLink to="/seminars" className={navData => navData.isActive ? nv.active: nv.unactive}> 
                <div className={nv.item}>
                    Seminars 
                </div>
            </NavLink> 
        </nav>
    )
}


export default NavBar