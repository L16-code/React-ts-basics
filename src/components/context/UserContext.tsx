import React, { useState } from 'react'
import { createContext } from 'react';
export type AuthUser={
    name:string;
    email:string;
}
type UserContextType={
    User:AuthUser |null;
    setUser:(user:AuthUser |null)=>void;
}
type UserContextProviderProp={
    children:React.ReactNode
}
export const UserContext=createContext({} as UserContextType)
export const UserContextProvider=({children}:UserContextProviderProp)=>{
    const [User, setUser]=useState<AuthUser |null >(null)
    return(
        <UserContext.Provider value={{User,setUser}}>
            {children}
        </UserContext.Provider>
    )
}