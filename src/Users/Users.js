import React, {Component} from 'react';
import User from "./User/User";
import './UserStyle/UserStyle.css'

class Users extends Component {

    users = [{id: 1, name: 'vasya', age: 31, status: false},
    { id: 2, name: 'petya', age: 30, status: true },
    { id: 3, name: 'kolya', age: 29, status: true },
    { id: 4, name: 'olya', age: 28, status: false },];

    render() {
        return (
            <div className={'all-Users'}>
                <h1>Users</h1>
                {this.users.map((value, index) => {
                    let cls = 'user-one'
                    if (index%2){
                        cls = 'user-two'
                    }
                    return <User item = {value} key = {value.id} userClass = {cls}/>
                })}
            </div>
        );
    }
}

export default Users;