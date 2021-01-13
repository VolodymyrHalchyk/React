import React, {Component} from 'react';
import {UsersServices} from "../services/UsersServices";
import User from "../User/User";
import {Route, Switch} from "react-router-dom";

class AllUsers extends Component {

    state = {users: []}
    userServices = new UsersServices()

    async componentDidMount() {
        let users = await this.userServices.getUsers()
        this.setState({users})
    }

    render() {

        let {users} = this.state

        return (
            <div>
                {users.map(value => <User key={value.id} item={value}/>)}

                <div>
                    <Switch>
                        <Route path={'/users/:id'} render={(props) => 'asdasd'}/>
                    </Switch>
                </div>

            </div>

        );
    }
}

export default AllUsers;