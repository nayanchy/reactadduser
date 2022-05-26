import React, { useState } from "react";
import styles from './AddUser.module.css'
import Cards from "../UI/Cards";
import Modal from "../Modal/Modal";

const AddUser = (props) => {
    const [userData, setUserData] = useState({
        userName : '',
        userAge : ''
    })

    const [error, setError] = useState(false)
    const [errorType, setErrorType] = useState('')
    const changeHandler = (e) => {
        setUserData(prevData => {
            return {...prevData, [e.target.name]:e.target.value}
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setUserData({
            userName : '',
            userAge : ''
        })
        if(userData.userName.trim().length === 0 || userData.userAge.trim().length === 0){
            setError(true)
            setErrorType('empty')
            return
        }
        if(+userData.userAge < 1){
            setError(true)
            setErrorType('age')
            return
        }
        props.onSaveData(userData)
    }
        
    const errorHandler =() => {
        setError(false)
    }

    return (
        <>
        <Cards>
            <div className="form-control">
                <form onSubmit={submitHandler}>
                    <div className={styles["form-group"]}>
                        <input type="text" name="userName" value= {userData.userName} onChange={changeHandler} placeholder="User Name"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="userAge" value={userData.userAge} onChange={changeHandler} placeholder="Age"/>
                    </div>
                    <div className="button-group">
                        <button className={styles["add-button"]}>Add</button>
                    </div>
                </form>
            </div>
        </Cards>
        {error && <Modal error={errorType} onConfirm={errorHandler}/>}
        </>
        
        
    )
}

export default AddUser