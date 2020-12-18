import React, {Component} from 'react';

class Car extends Component {
    render() {
        let {item, carStyle} = this.props

        return (
            <div>
                <p className={carStyle}>{item.model} - {item.color} - {item.driver.name}</p>
            </div>
        );
    }
}

export default Car;