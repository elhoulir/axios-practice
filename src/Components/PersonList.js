import axios from 'axios'
import React from 'react'

export default class PersonList extends React.Component {
    state = {
        persons: [ ]
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            this.setState({ persons: res.data})
            console.log(res);
        })

    }

    render() {
        return (
        <ul> 
            {this.state.persons.map(person => 
            <li key={person.id}>
                {person.name}
            </li>)}
        </ul>
        )
    }
}