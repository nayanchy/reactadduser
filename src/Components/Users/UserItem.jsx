import React from "react";
import styles from './UserItem.module.css'

const UserItem = (props) => {
    return (
        <li className={styles['user-item']}>
            <div className={styles['username-part']}>
                User: {props.userName}
            </div>
            <div className="userage-part">
                Age: {props.userAge}
            </div>
        </li>
    )
}

export default UserItem