import React, {Component} from 'react';

class Post extends Component {
    render() {

        let {item, chosePost} = this.props

        return (
            <div>
                {item.id} - {item.title} - <button onClick={()=>chosePost(item.id)}>Click</button>
            </div>
        );
    }
}

export default Post;