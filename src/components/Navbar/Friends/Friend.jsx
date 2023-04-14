import React from "react";
import s from './Friend.module.css';

const Friend = (props) => {
    return (
        <div>
            <div className={s.image}>
                <img src={props.image}></img>
            </div>
            <div>
                <span>{props.name}</span>
            </div>
        </div>
    )
}

export default Friend