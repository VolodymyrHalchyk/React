import React, {Component} from 'react';

class City extends Component {
    render() {
        let {item, clsname} = this.props;
        return (
            <div>
                <h3 className={clsname}>{item.name} - {item.country} - {item.region}</h3>
            </div>
        );
    }
}

export default City;