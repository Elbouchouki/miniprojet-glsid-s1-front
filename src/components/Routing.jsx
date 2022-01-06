import React, {useEffect,useState} from 'react'
import { BrowserRouter,Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Loader } from 'rsuite'
import AuthAction from "../redux/actions/AuthAction"
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
    const authReducer = useSelector(state=>state.AuthReducer)
    const [loading,setLoading]= useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        setLoading(true)
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')
        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')
        const stored_user =JSON.parse(localStorage.getItem('user'))
        const stored_token = localStorage.getItem('token')
        dispatch(AuthAction.setToken(stored_token))
        dispatch(AuthAction.setUser(stored_user))
        setLoading(false)
    }, [dispatch])
    return (
        <BrowserRouter>
            <Switch>
                <AdminRoutes path="/admin" component={Dashboard} />
                <AdminRoutes path="/medecins" component={Medecin} />
                <AdminRoutes path="/infirmiers" component={Infirmier} />
                <AdminRoutes path="/patients" component={Patient} />
                <AdminRoutes path="/parametrages" component={Parametrage} />
                <AdminRoutes path="/reservations" component={Reservation} />

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
