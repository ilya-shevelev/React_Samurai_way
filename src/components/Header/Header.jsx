import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f7f9e5ecc6e0633ecbc0_logo-example3.svg"></img>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;
