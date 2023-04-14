import React from "react"
import s from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={s.messageItem}>
            <div className={s.dialog}>{props.message}</div>
            <small>{props.time}</small>
        </div>
    )
}

export default Message;