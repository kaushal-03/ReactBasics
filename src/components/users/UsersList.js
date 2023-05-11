import React from 'react'
import Card from '../UI/Card'
import classes from './UsersList.module.css';
function UsersList(props) {
return (
   <Card className={classes.users}>
    <ul>
        {props.data.map((e)=>(
           <li>
           {e.name} ({e.userage} years old)
         </li>

        ))}
    </ul>
   </Card>
  )
}

export default UsersList