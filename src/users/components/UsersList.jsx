import React from "react";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

import classes from "./UsersList.module.css";

const UsersList = (props) => {

    if(props.items.length === 0){
        return(
            <div className="center">
                <Card>
                    <h2>No Users Found</h2>
                </Card>
            </div>
        );
    }

    return(
        <ul className={classes["users-list"]}>
            {props.items.map((item) => {
                return <UserItem 
                    key={item.id} 
                    id={item.id} 
                    image={item.image} 
                    name={item.name} 
                    placeCount={item.places}
                />
            })}
        </ul>
    );
}

export default UsersList;