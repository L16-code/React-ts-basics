import React from 'react'
interface buttonProps {
    handleClick: (event:React.MouseEvent<HTMLButtonElement>,id:number) => void
}
const Button = (props: buttonProps) => {
    return (
        <div>Button
            <button onClick={(event)=>props.handleClick(event,1)}>done</button>
        </div>
    )
}

export default Button