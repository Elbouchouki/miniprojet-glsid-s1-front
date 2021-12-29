import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Patient from "../../pages/admin/Patient"
import Dashboard from '../../pages/admin/Dashboard'
import Medecin from "../../pages/admin/Medecin"
import Infirmier from "../../pages/admin/Infirmier"

// import Me
// import Patient
const AdminRoutes = () => {
    return (
        <Switch>
            <Route path='/admin' exact component={Dashboard}/>
            <Route path='/patient' exact component={Patient}/>
            <Route path='/medecin' exact component={Medecin}/>
            <Route path='/infirmier' exact component={Infirmier}/>
        </Switch>
    )
}

export default AdminRoutes
