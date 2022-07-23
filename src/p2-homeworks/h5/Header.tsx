import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.navbar}>
            <div className={s.block}>
                <NavLink to={PATH.PRE_JUNIOR} className={s.navText}>PreJunior</NavLink>
            </div >
            <div className={s.block}>
                <NavLink to={PATH.JUNIOR} className={s.navText}>Junior</NavLink>
            </div>
            <div className={s.block}>
                <NavLink to={PATH.JUNIOR_PLUS} className={s.navText}>JuniorPlus</NavLink>
            </div>



        </div>
    )
}

export default Header
