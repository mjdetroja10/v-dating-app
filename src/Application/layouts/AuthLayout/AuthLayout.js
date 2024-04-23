import { LOGIN_URL } from 'Application/Constants/RouteConstant'
import { Navigate, Outlet } from 'react-router-dom'

export const AuthLayout = () => {
    if (!localStorage.getItem('token')) {
        return <Navigate to={LOGIN_URL} />
    }

    return <Outlet />
}
