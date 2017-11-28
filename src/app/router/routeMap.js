import React from 'react'
// import { Router, Route, IndexRoute } from 'react-router'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {render} from "react-dom";
import App from '../containers'
import Home from '../containers/Home'
 import City from '../containers/City'
import User from '../containers/User' 
import Search from '../containers/Search' 
import Detail from '../containers/Detail'
import NotFound from '../containers/NotFound/404'
class RouterMap extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <div>
                    <Route
                        path="/"
                        children={() => {
                        return (
                            <App>
                                <Switch>
                                    {<Route exact path="/" component={Home}/>}
                                    <Route path='/city' component={City}/>
                                    <Route path='/user' component={User}/>
                                    <Route path='/search' component={Search}/>
                                    <Route path='/detail' component={Detail}/>
                                    <Route path='*' component={NotFound}/>
                                </Switch>
                            </App>
                        )
                    }}></Route>
                </div>
            </BrowserRouter>
        )
    }
}

export default RouterMap
