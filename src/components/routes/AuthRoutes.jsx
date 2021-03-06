import React ,{Component}from 'react'

import { Route } from 'react-router-dom'

import AuthLayout from './../layout/auth/AuthLayout';

const AuthRoutes = ({component:Component,...props}) => {
    return (
        <Route {...props} render={props => (  
            <AuthLayout>  
                <Component {...props} />  
            </AuthLayout>  
        )} />  
    )
}
export default AuthRoutes