import React, { useState } from "react";
import style from './AddUser.module.css';
import Button from "./Shared/Button";
import Card from "./Shared/Card";
import ErrorModal from "./Shared/ErrorModal";

const AddUser = props => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [displayErrorModal, setDisplayErrorModal] = useState(false);
    const [errorData, setErrorData] = useState({});
    const onSubmitHandler = e => {
        e.preventDefault();

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
        console.log("userName : ", userName);
        console.log("userAge : ", userAge);
        const userObj = {
            id: `${Math.random()}`,
            name: userName,
            age: userAge
        }
        console.log(userObj)
        props.onAddUser(userObj);
        setUserName('');
        setUserAge('');
    }

    const onChangeHandler = e => {
        switch (e.target.id) {
            case 'name':
                setUserName(e.target.value.trim());
                break;
            case 'age':
                setUserAge(e.target.value.trim());
                break;
            default:
                break;
        }
    }

    const modalClosehandler = () => {
        setDisplayErrorModal(false);
    }
    return (
        <div>
            {displayErrorModal && <ErrorModal title={errorData.title} message={errorData.message} onCloseModal={modalClosehandler} />}

            <Card className={style.input}>
                <form onSubmit={onSubmitHandler} className={style['user-form']}>
                    <label htmlFor='name'>User Name</label>
                    <input value={userName} type='text' id='name' onChange={onChangeHandler} />
                    <label htmlFor='age'>User Age (Years)</label>
                    <input value={userAge} type='number' id='age' onChange={onChangeHandler} />
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </div>
    )
}
export default AddUser;