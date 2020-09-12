import React from "react";
import NavItem from "./NavItem"

import classes from "./NavLinks.module.css";

const navLinks = (props) => {
    return(
        <ul className={classes["nav-links"]}>

            <NavItem exact to="/">All Users</NavItem>

            <NavItem to="/u1/places">My Places</NavItem>

            <NavItem to="/places/new">New Places</NavItem>

            <NavItem to="/login">Login</NavItem>
        </ul>
    );
}

export default navLinks;