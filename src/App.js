import React, {Component} from 'react';
import AllAlbums from "./components/AllAlbums/AllAlbums";
import AllUsers from "./components/AllUsers/AllUsers";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>

                <div>
                    <div>
                        <Link to={'/albums'}>Albums</Link>
                    </div>

                    <div>
                        <Link to={'/users'}>Users</Link>
                    </div>

                    <Switch>

                        <Route path={'/albums'} render={() => <AllAlbums/>}/>
                        <Route path={'/users'} render={() => <AllUsers/>}/>

                    </Switch>

                </div>

            </Router>
        );
    }
}

export default App;