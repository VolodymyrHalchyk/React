import React, {Component} from 'react';

class Commetn extends Component {
    render() {
        let {item, choseComment} = this.props
        return (
            <div>
                {item.id} - {item.name} - <button onClick={()=>choseComment(item.id)}>Click</button>
            </div>
        );
    }
}

export default Commetn;