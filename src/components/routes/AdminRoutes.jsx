import React, { Component ,useEffect,useState} from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Loader } from 'rsuite'
import AdminLayout from './../layout/admin/AdminLayout';
import AuthAction from "../../redux/actions/AuthAction"


const AdminRoutes = ({component:Component,...props}) => {
    const authReducer = useSelector(state=>state.AuthReducer)
    const [loading,setLoading]= useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        setLoading(true)
        const stored_user =JSON.parse(localStorage.getItem('user'))
        const stored_token = localStorage.getItem('token')
        console.log(stored_token,stored_user)
        dispatch(AuthAction.setToken(stored_token))
        dispatch(AuthAction.setUser(stored_user))
        setLoading(false)
    }, [dispatch])
    return (
        loading 
        ?
        <Loader backdrop content="Chargement en cours..." vertical /> :
        authReducer?.user?
        <Route {...props} render={props => (  
            <AdminLayout>  
                <Component {...props} />  
            </AdminLayout>  
        )} />  :<Redirect to="/login"/>
    )
}
export default AdminRoutes