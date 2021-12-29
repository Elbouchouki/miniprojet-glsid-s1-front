import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Login from '../../pages/auth/Login'

const AuthRoutes = () => {
    return (
        <Switch>
            <Route path='/login' exact component={Login}/>
        </Switch>
    )
}

export default AuthRoutes
