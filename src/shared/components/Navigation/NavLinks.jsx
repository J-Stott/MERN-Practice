import React, {useContext} from "react";
import NavItem from "./NavItem";

import classes from "./NavLinks.module.css";
import {AuthContext} from "../../context/auth-context";
import {conditionalRender} from "../../../Utility/RenderHelpers";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className={classes["nav-links"]}>
      <NavItem exact to="/">
        All Users
      </NavItem>

      {conditionalRender(<NavItem to="/u1/places">My Places</NavItem>, auth.isLoggedIn)}
      {conditionalRender(<NavItem to="/places/new">New Places</NavItem>, auth.isLoggedIn)}
      {conditionalRender(<NavItem to="/login">Login</NavItem>, !auth.isLoggedIn)}
      {conditionalRender(<li><button onClick={auth.logout}>Logout</button></li>, auth.isLoggedIn)}
    </ul>
  );
};

export default NavLinks;
