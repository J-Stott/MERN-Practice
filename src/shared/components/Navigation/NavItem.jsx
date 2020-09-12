import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./NavItem.module.css";

const NavItem = (props) => {
    return(
        <li className={classes["nav-item"]}>
            <NavLink activeClassName={classes["active"]} exact={props.exact} to={props.to}>{props.children}</NavLink>
        </li>
    );
}

export default NavItem;