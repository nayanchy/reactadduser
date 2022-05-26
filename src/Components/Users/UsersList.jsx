import React from "react";
import Cards from "../UI/Cards";
import UserItem from "./UserItem";
import './UsersList.modules.css'

const UsersList = ({users}) => {
    const isUsers = (users && users.length !==0) ? true : false
    const usersList = users.map(user => {
       return <UserItem userName={user.userName} userAge={user.userAge} key={Math.random()}/>
    })
    return(
        <Cards extraClass={!isUsers ? 'hidden' : ''}>
            <ul>
                {usersList}
            </ul>
        </Cards>
    )
}

export default UsersList