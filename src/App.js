import React, {Component} from 'react';
import AllUsers from "./components/AllUsers/AllUsers";
import AllPosts from "./components/AllPosts/AllPosts";
import AllComments from "./components/AllComments/AllComments";
import AllAlbums from "./components/AllAlbums/AllAlbums";

class App extends Component {
    render() {
        return (
            <div>
                <AllUsers />
                <AllPosts />
                <AllComments />
                <AllAlbums />
            </div>
        );
    }
}

export default App;