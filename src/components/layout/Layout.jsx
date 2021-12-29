import React from 'react'
import AdminRoutes from "../routes/AdminRoutes"
import AdminLayout from './admin/AdminLayout'
import { BrowserRouter, Route } from 'react-router-dom'

const Layout = () => {

    return (
        <BrowserRouter>
            <Route render={(props) => (
                <AdminLayout {...props}>
                    <AdminRoutes/>
                </AdminLayout>
            )}/>
        </BrowserRouter>
    )
}

export default Layout
