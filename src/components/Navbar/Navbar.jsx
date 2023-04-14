import React from "react";
import s from './Navbar.module.css';
import Friend from './Friends/Friend'
import NavigationItem from "./NavigationItem/NavigationItem";

const Navbar = (props) => {

    let friendsElements = props.friends.map(
        friend => <Friend name={friend.name} key={friend.id} image={friend.image} />
    )

    let navItemsElements = props.nav_items.map(
        nav_item => <NavigationItem name={nav_item.name} key={nav_item.id} url={nav_item.url} />
    )

    return (
        <div>
            {navItemsElements}
            {friendsElements}
        </div>
    )
};

export default Navbar;
