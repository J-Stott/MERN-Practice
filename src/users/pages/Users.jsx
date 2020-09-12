import React from "react";
import UsersList from "../components/UsersList";

const Users = (props) => {
    const USERS = [{
        id: 0,
        name: "Lad",
        image: "https://randomwordgenerator.com/img/picture-generator/53e2d443425aa514f1dc8460962e33791c3ad6e04e50744074287ed59049cd_640.jpg",
        places: 4
    }];

    return (
        <UsersList items={USERS} />
    );
}

export default Users;