import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import User from "../User/User";

class AllUsers extends Component {

    state = {users: [], chosenOne: null}
    userService = new UserService()

    choseUser = (id) => {
        this.userService.getUserById(id).then(value => this.setState({chosenOne:value}))
    }

    componentDidMount() {
        this.userService.getAllUsers().then(value => this.setState({users: value}))
    }

    render() {
        let {users, chosenOne} = this.state
        return (
            <div>
                <h1>All Users</h1>
                {users.map(value => <User item = {value} key = {value.id} choseUser = {this.choseUser}/>)}
                {chosenOne && <h2>{chosenOne.id} - {chosenOne.name}</h2>}
            </div>
        );
    }
}

export default AllUsers;