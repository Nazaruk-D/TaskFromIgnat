import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from "./Header.module.css"


export type HeaderPropsType = {
    onClick: () => void
    collapsed: boolean
}


export const Header: React.FC<HeaderPropsType> = ({onClick, collapsed}) => {
    const inputClass = collapsed ? s.navbarActive : s.navbar;

    return (
        <div className={inputClass}>
            <MenuActivator onClick={onClick}/>
            {collapsed && <Menu/>}
        </div>
    )
}

export const Menu = () => {
    return (<>
            <span className={s.block}>
                <NavLink to={PATH.PRE_JUNIOR} className={s.navText} activeClassName={s.active}>PreJunior</NavLink>
            </span>
            <span className={s.block}>
                <NavLink to={PATH.JUNIOR} className={s.navText} activeClassName={s.active}>Junior</NavLink>
            </span>
            <span className={s.block}>
                <NavLink to={PATH.JUNIOR_PLUS} className={s.navText} activeClassName={s.active}>JuniorPlus</NavLink>
            </span>
        </>
    )
}


export type MenuActivatorPropsType = {
    onClick: () => void
}

const MenuActivator: React.FC<MenuActivatorPropsType> = ({onClick}) => {

    return (
        <span className={s.block} onClick={e => onClick()} ><span className={s.menuActivator}>Menu</span></span>
    )
}



