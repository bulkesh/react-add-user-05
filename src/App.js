import React, { useState } from "react";
import style from './App.module.css';
import AddUser from './Components/AddUser';
import UserList from './Components/UserList';

function App() {
  const userList = [];
  const [usersList, setUsersList] = useState(userList);
  const addUserHandler = user =>{
    setUsersList((prevUsersList)=>{
      return [user,...prevUsersList]
    })
  }
  return (
    <div className={style.App}>
        <AddUser onAddUser={addUserHandler}/>
        <UserList list={usersList} />
    </div>
  );
}

export default App;
