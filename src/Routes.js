import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './middlewares/PrivateRoute'
import Login from './pages/login'
import Home from './pages/home'

const Routes = () => (

    <Router>
        <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/" exact component={Home} />
        </Switch>
    </Router>
)

export default Routes