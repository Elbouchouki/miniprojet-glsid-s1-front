import React ,{Component}from 'react'

import { Route } from 'react-router-dom'

import ErrorLayout from '../layout/error/ErrorLayout';

const ErrorRoutes = ({component:Component,...props}) => {
    return (
        <Route {...props} render={props => (  
            <ErrorLayout>  
                <Component {...props} />  
            </ErrorLayout>  
        )} />  
    )
}
export default ErrorRoutes