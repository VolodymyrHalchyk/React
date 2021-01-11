import React, {Component} from 'react';
import User from "./User/User";
import './User/All-Users-Style.css'

class AllUsers extends Component {

    state = {users: [], titleColor: 'one', chosenUser: null}
    flag = true;

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(userFromIp => {this.setState({users: userFromIp})})
    }

    changeColor = () => {
        if (this.flag){
            this.setState({titleColor:'two'})
        } else {
            this.setState({titleColor:'one'})
        }
        this.flag = !this.flag;
    }

    selectUser = (id) => {
        let chosenUser = this.state.users.find(value => value.id === id)
        this.setState({chosenUser})
    }

    render() {
        let {users, titleColor, chosenUser} = this.state
        return (
            <div>
                <h1 className={titleColor} onClick={this.changeColor}>All Users</h1>
                {
                    users.map(value => (<User
                        item = {value}
                        key = {value.id}
                        selectUser = {this.selectUser}
                    />))
                }
                <hr/>
                {chosenUser && <User item = {chosenUser}/>}
                <hr/>
            </div>
        );
    }
}

export default AllUsers;