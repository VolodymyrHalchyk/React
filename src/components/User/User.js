import React, {Component} from 'react';

class User extends Component {
    render() {

        let {item, choseUser} = this.props

        return (
            <div>
                {item.id} - {item.name} - <button onClick={()=>choseUser(item.id)}>Click</button>
            </div>
        );
    }
}

export default User;