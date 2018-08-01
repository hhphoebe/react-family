import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';

import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=Page1!pages/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=Counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=UserInfo!pages/UserInfo/UserInfo';


const Loading = function(){
    return <div>Loading</div>
};

const createComponent = (component) =>(props) =>(
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading />
        }
    </Bundle>
);


const getRouter = () =>(
    <Router>
        <div>
            <ul>
                <li> <Link to="/">首页</Link></li>
                <li> <Link to="/page1">page1</Link></li>
                <li> <Link to="/counter">counter</Link></li>
                <li> <Link to="/userInfo">UserInfo</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={createComponent(Home)}/>
                <Route path="/page1" component={createComponent(Page1)}/>
                <Route path="/counter" component={createComponent(Counter)}/>
                <Route path="/userInfo" component={createComponent(UserInfo)}/>
            </Switch>
        </div>
    </Router>
);
export default getRouter;