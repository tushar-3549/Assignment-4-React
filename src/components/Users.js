import React from 'react'
import User from './User'

const Users = (props) => {
    // console.log(props);
  return (
    <section className="users">
        {props.users.map((user)=> (
            <User key={user.id} {...user}/>
        ))}
    </section>
  )
}

export default Users
