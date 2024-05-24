import React, { useState } from 'react'
type AuthUser = {
    name: string;
    email: string;
}
const User = () => {
    const [user, setUser] = useState<null| AuthUser>(null);
    // current and default value of state is null but in future it can also accepts the AuthUser . for future <null| AuthUser>
    // for future if we know tht the value will never be null then we uses tpe assertion for this 
    // const [user, setUser] = useState<AuthUser>({} as AuthUser);
    const Handlelogin = () => {
        setUser({
            name: 'Rahul',
            email: 'rahul@123'
        })
    }
    const Handlelogout = () => {
        setUser(null);
    }

    return (
        <div>User
            <button onClick={Handlelogin}>Login</button>
            <button onClick={Handlelogout}>Logout</button>
            <div>User Name is:{user?.name}</div>
            <div>User Email is:{user?.email}</div>
            {/* <div>User is{isLoggedIn ? 'LoggedIn' : 'loggedOut'}</div> */}
        </div>
    )
}

export default User