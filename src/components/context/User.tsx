import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const User = () => {
    const userContext = useContext(UserContext)

    const HandleLogin = () => {
        userContext.setUser({
            name: 'Raj',
            email: 'raj@123'
        })
    }
    const HandleLogout = () => {
        userContext.setUser(null)
    }


    return (
        <div>
            <button onClick={HandleLogin}>Login</button>
            <button onClick={HandleLogout}>Logout</button>
            <div>User Name is:{userContext.User?.name}</div>
            <div>User Email is:{userContext.User?.email}</div>
        </div>
    )
}

export default User