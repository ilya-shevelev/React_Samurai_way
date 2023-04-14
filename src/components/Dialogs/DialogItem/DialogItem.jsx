import React from "react";
import { NavLink } from "react-router-dom";
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div>
            <div className={`${s.dialog} ${s.active}`}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
            <div className={s.avatar}>
                <img src={props.image}></img>
            </div>
        </div>
    )
}

export default DialogItem;