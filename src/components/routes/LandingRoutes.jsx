import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../../pages/landing/Home'

const LandingRoutes = () => {
    return (
        <Switch>
            <Route path='/home' exact component={Home}/>
        </Switch>
    )
}

export default LandingRoutes
