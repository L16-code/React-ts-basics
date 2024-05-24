import React from 'react'

type StatusProps={
    status:'loading'| 'success'| 'error'
}
const Status = (props:StatusProps) => {
    let message
    switch (props.status) {
        case 'success':
            message = 'Data Fetched';
            break;
        case 'loading':
            message = 'Loading...';
            break;
        case 'error':
            message = 'Error Fetching Data';
            break;
        default:
            message = 'message not found any matches';
    }

    return (
        <div>
            <h2> Status - {message} </h2>
        </div>
    )
}

export default Status