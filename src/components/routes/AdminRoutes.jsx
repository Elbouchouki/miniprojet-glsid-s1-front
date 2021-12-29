import React, { Component } from 'react'

import { Route } from 'react-router-dom'

import AdminLayout from './../layout/admin/AdminLayout';

const AdminRoutes = ({component:Component,...props}) => {
    return (
        <Route {...props} render={props => (  
            <AdminLayout>  
                <Component {...props} />  
            </AdminLayout>  
        )} />  
    )
}
export default AdminRoutes