import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {render} from "react-dom";
import App from '../containers'
import Home from '../containers/Home'
 import City from '../containers/City'
import User from '../containers/User' 
import Search from '../containers/Search' 
import Detail from '../containers/Detail'
import NotFound from '../containers/NotFound/404'
// import TouchList from "../containers/TouchList";
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
                                    <Route exact path="/" render={({history})=>{
                                        return <Home history={history}/>
                                    }}/>
                                    <Route path='/city' render={({history})=>(
                                        <City history={history}/>
                                    )}/>
                                    <Route path='/user' component={User}/>
                                    <Route path='/search/:categary/:keyword' component={Search}/>
                                    <Route path='/detail' component={Detail}/>
                                    {/* <Route path="/touchlist" component={TouchList}/> */}
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
