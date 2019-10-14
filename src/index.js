import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import './sass/main.scss';
//import 'normalize.css';
//import 'bootstrap/dist/css/bootstrap.css';

// routing : https://codeburst.io/getting-started-with-react-router-5c978f70df91
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Cars from './components/Cars/Cars';
import Livestreams from './components/Livestreams';
import Livetweets from './components/Livetweets';
import Players from './components/Players';
import Calendar from './components/Calendar';
import Reddit from './components/Reddit';
import Signin from './components/Signin/Signin';
import Signup from './components/Signin/Signup';
import Notfound from './components/Notfound';

import { Provider } from 'react-redux';
import store from './store';

// console.log(store.getState().login.userLoggedIn); // state in rootReducer

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/Cars" component={Cars} />
            <Route exact path="/Livestreams" component={Livestreams} />
            <Route exact path="/Livetweets" component={Livetweets} />
            <Route exact path="/Players" component={Players} />
            <Route exact path="/Calendar" component={Calendar} />
            <Route exact path="/Reddit" component={Reddit} />
            <Route exact path="/Signin" component={Signin} />
            <Route exact path="/Signup" component={Signup} />
            <Route component={Notfound} />
        </Switch>
    </Router>
);

ReactDOM.render(<Provider store={store}>{routing}</Provider>, document.getElementById('root'));









//ReactDOM.render(<App cars={cars} />, document.getElementById('root'));
