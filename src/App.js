import logo from './logo.svg';
import './App.css';
import AddUser from './components/users/AddUser';
import UsersList from './components/users/UsersList';
import { useState } from 'react';
function App() {
  const [usersdata,updateusersdata]=useState([]);
  const getuser = (username,age) =>
  {
    updateusersdata((prevusersdata) => {
      return[...prevusersdata,{name:username,userage:age}]
    })
    console.log("In App");
    console.log(username,age);
  }
  return (
    <div className="App">
      <AddUser getdata={getuser}></AddUser>
      <UsersList data={usersdata}></UsersList>
    </div>
  );
}

export default App;
