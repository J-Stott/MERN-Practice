import React from "react";
import classes from "./Map.module.css";

const Map = (props) => {
    return(
        <div className={`${classes["map"]} ${props.className}`} >
            <div className={classes["map-background"]}>
                
            </div>
        </div>
    );
}

export default Map;