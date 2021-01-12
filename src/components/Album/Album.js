import React, {Component} from 'react';

class Album extends Component {
    render() {
        let {item, choseAlbum} = this.props
        return (
            <div>
                {item.id} - {item.title} - <button onClick={()=>choseAlbum(item.id)}>Click</button>
            </div>
        );
    }
}

export default Album;