import React from "react";
import {Link} from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";

import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
    return(
        <React.Fragment>
            <SideDrawer className={classes["main-navigation__drawer-nav"]}>
                <nav>
                <NavLinks />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className={classes["main-navigation__menu-btn"]}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className={classes["main-navigation__title"]}>
                    <Link to="/">YourPlaces</Link>
                </h1>
                <nav className={classes["main-navigation__header-nav"]}>
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    );
}

export default MainNavigation;