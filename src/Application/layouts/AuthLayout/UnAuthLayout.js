import { DISCOVER_URL } from 'Application/Constants/RouteConstant'
import { Navigate, Outlet } from 'react-router-dom'

export const UnAuthLayout = () => {
    if (localStorage.getItem('token')) {
        return <Navigate to={DISCOVER_URL} />
    }

    return <Outlet />
}
