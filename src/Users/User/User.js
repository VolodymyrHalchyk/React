import React, {Component} from 'react';

class User extends Component {
    render() {
        let {item, userClass} = this.props;
        return (
            <div>
                <h3 className={userClass}>{item.id} - {item.name} - {item.status.toString()}</h3>
            </div>
        );
    }
}

export default User;