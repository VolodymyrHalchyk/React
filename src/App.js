import React, {Component} from 'react';
import Cities from "./Сities/Cities";
import Users from "./Users/Users";
import Cars from "./Cars/Cars";


class App extends Component {
    render() {
        return (
            <div>
                <Cities />
                <Users />
                <Cars />
            </div>
        );
    }
}

export default App;