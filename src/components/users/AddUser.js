import { useState } from "react"; 
import Card from "../UI/Card";
import "../UI/Card.module.css";
import classes from "./AddUser.module.css"
function AddUser(props) {
    const[username,setUsername]=useState('');
    const[age,setAge]=useState('');
    const inputhandler = (event) =>
    {
        event.preventDefault();
        if(username.trim().length === 0 || age.trim().length === 0){return;}
        if(+age < 1){return ;}
        props.getdata(username,age);
        //console.log(username,age);
        setUsername('');
        setAge('');
    }
    const Usernamehandler = (event)=>
    {
        setUsername(event.target.value);
        
    }
    const setagehandler = (event)=>
    {
        setAge(event.target.value);
    }
  return (
    <Card className={classes.input}>
    <form onSubmit={inputhandler}>
    <label>Username:</label>
    <input type="text" onChange={Usernamehandler} value={username}></input><br></br>
    <label>Age:</label>
    <input type="number" onChange={setagehandler} value={age}></input><br></br>
    <button type="submit">Add User</button>
    </form>
    </Card>
  )
}

export default AddUser