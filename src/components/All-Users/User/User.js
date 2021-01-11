import React, {Component} from 'react';

class User extends Component {


    render() {
        let {item, selectUser} = this.props

        return (
            <div>
                {item.id} - {item.name}
                <button onClick={() => selectUser(item.id)}>Click</button>
            </div>
        );
    }
}

export default User;