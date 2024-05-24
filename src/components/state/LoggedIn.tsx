import React from 'react'
import { useState } from 'react'

const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const HandleLogin = () => {
        console.log('login')
        setIsLoggedIn(true)
    }
    const HandleLogout = () => {
        console.log('logout')
        setIsLoggedIn(false)
    }
    return (
        <div>LoggedIn
            <button onClick={HandleLogin}>Login</button>
            <button onClick={HandleLogout}>Logout</button>
            <div>User is{isLoggedIn ? 'LoggedIn' : 'loggedOut'}</div>
        </div>
    )
}

export default LoggedIn