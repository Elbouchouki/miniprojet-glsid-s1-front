import React from 'react'
import LandingRoutes from '../LandingRoutes'
import AdminLayout from './admin/AdminLayout'
import { BrowserRouter, Route } from 'react-router-dom'

const Layout = () => {

    return (
        <BrowserRouter>
            <Route render={(props) => (
                <AdminLayout>
                    <LandingRoutes/>
                </AdminLayout>
            )}/>

        </BrowserRouter>
    )
}

export default Layout
