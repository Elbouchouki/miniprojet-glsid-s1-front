import React, { Component } from 'react'

import { Route } from 'react-router-dom'

import LandingLayout from './../layout/landing/LandingLayout';

const LandingRoutes = ({component:Component,...props}) => {
    return (
        <Route {...props} render={props => (  
            <LandingLayout>  
                <Component {...props} />  
            </LandingLayout>  
        )} />  
    )
}
export default LandingRoutes