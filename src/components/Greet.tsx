import React from 'react'

type GreetProps = {
    name: string;
    age?: number;
    isLoggedIn: boolean;
}
const Greet = (props: GreetProps) => {
    return (
        <div>
            {props.isLoggedIn ? `Greet ${props.name} . Your age is ${props.age}`:`Welcome Guets`}
            
        </div>
    )
}

export default Greet