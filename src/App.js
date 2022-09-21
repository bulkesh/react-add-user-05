import React, { useState } from "react";
import style from './App.module.css';
import AddUser from './Components/AddUser';
import Wrapper from "./Components/Helpers/Wrapper";
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
    <Wrapper className={style.App}>
        <AddUser onAddUser={addUserHandler}/>
        <UserList list={usersList} />
    </Wrapper>
  );
}

export default App;
