import React from 'react'
type PersonListProps = {
    names: {
        first: string;
        last: string;
    }[]
}
const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.names.map(person => {
                return <h2 key={person.first}>{person.first} {person.last}</h2>
            })}
        </div>
    )
}

export default PersonList