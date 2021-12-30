import React from 'react'
import { BrowserRouter,Switch } from 'react-router-dom'

// routes
import AdminRoutes from "./routes/AdminRoutes"
import LandingRoutes from "./routes/LandingRoutes"
import AuthRoutes from "./routes/AuthRoutes"
import ErrorRoutes from "./routes/ErrorRoutes"



// pages
import Dashboard from '../pages/admin/Dashboard';
import Infirmier from '../pages/admin/Infirmier';
import Medecin from '../pages/admin/Medecin';
import Patient from '../pages/admin/Patient';
import Parametrage from '../pages/admin/Parametrage';
import Reservation from '../pages/admin/Reservation';

import Home from '../pages/landing/Home';
import Reserving from '../pages/landing/Reserving';


import Login from '../pages/auth/Login';
import Register from './../pages/auth/Register';

import FourOFour from '../pages/FourOFour';



const Routing = () => {

    return (
        <BrowserRouter>
            <Switch>
                <AdminRoutes path="/admin" component={Dashboard} />
                <AdminRoutes path="/medecin" component={Medecin} />
                <AdminRoutes path="/infirmier" component={Infirmier} />
                <AdminRoutes path="/patient" component={Patient} />
                <AdminRoutes path="/parametrage" component={Parametrage} />
                <AdminRoutes path="/reservation" component={Reservation} />

                <LandingRoutes exact  path="/" component={Home} />
                <AuthRoutes  path="/reserving" component={Reserving} />

                <AuthRoutes path="/login" component={Login} />
                <AuthRoutes path="/register" component={Register} />

                <ErrorRoutes path='*' component={FourOFour}  />
            </Switch>
        </BrowserRouter>
    )
}

export default Routing
