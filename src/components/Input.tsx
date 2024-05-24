import React from 'react'
type InputProps = {
    value: string;
    handleChange: (event: React.ChangeEvent <HTMLInputElement>) => void;
}
const Input = (props: InputProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        alert(props.value)
    };
    return (
        <div>
            <input type='text' value={props.value} onInput={handleChange} />
        </div>
    )
}

export default Input