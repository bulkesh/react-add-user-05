import React from "react";
import Card from "./Shared/Card";
import style from './UserList.module.css';

const UserList = props => {
    return (
        <Card className={style.users}>
            <ul>
                {
                    props.list.map(user => (
                        <li key={user.id}>{user.name} {user.age} Years old</li>
                    ))
                }
            </ul>
        </Card>
    )
}
export default UserList;