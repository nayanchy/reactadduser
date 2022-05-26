import React from 'react'
import AddUser from './AddUser'
import UsersList from './UsersList'


const Users = (props) => {
    const submitHandler = (data) => {
        props.submitHandler(data)
    }
    return(
        <>
            <AddUser onSaveData = {submitHandler}/>
            <UsersList users={props.users}/>
        </>
    )
}

export default Users