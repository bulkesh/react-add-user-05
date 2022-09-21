import React, { useState, useRef } from "react";
import style from './AddUser.module.css';
import Wrapper from "./Helpers/Wrapper";
import Button from "./Shared/Button";
import Card from "./Shared/Card";
import ErrorModal from "./Shared/ErrorModal";

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [displayErrorModal, setDisplayErrorModal] = useState(false);
    const [errorData, setErrorData] = useState({});

    const onSubmitHandler = e => {
        e.preventDefault();
        const userName = nameInputRef.current.value;
        const userAge = ageInputRef.current.value;
        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setErrorData({ title: "Empty Form", message: "User data should be filled before Add User." })
            setDisplayErrorModal(true);
            return;
        }
        if (+userAge < 1) {
            setErrorData({ title: "Wrong age!!", message: "Age should be greter then 0." });
            setDisplayErrorModal(true);
            return;
        }
        const userObj = {
            id: `${Math.random()}`,
            name: userName,
            age: userAge
        }
        console.log(userObj);
        props.onAddUser(userObj);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    const modalClosehandler = () => {
        setDisplayErrorModal(false);
    }

    return (
        <Wrapper>
            {displayErrorModal && <ErrorModal title={errorData.title} message={errorData.message} onCloseModal={modalClosehandler} />}

            <Card className={style.input}>
                <form onSubmit={onSubmitHandler} className={style['user-form']}>
                    <label htmlFor='name'>User Name</label>
                    <input ref={nameInputRef} type='text' id='name' />
                    <label htmlFor='age'>User Age (Years)</label>
                    <input ref={ageInputRef} type='number' id='age' />
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </Wrapper>
    )
}
export default AddUser;