import React from "react";
import { NavLink } from "react-router-dom";
import s from './NavigationItem.module.css';

const NavigationItem = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={props.url} className={s.activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default NavigationItem;