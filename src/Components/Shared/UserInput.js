import React from "react";
import style from './UserInput.module.css';

const UserInput = props => {
    const formField = props.info;
    return(
        <div id={`${Math.random()}`} className={style.input}>
            <label htmlFor={formField.id}>{formField.label}</label>
            <input value={props.value} type={formField.type} id={formField.id} placeholder={formField.placeHolder} onChange={props.inputChange} />
        </div>
    )
}
export default UserInput;