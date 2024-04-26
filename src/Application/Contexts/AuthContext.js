import { DISCOVER_URL, LOGIN_URL, PROTECTED_ROUTES, UNPROTECTED_ROUTES } from 'Application/Constants/RouteConstant'
import { jwtDecode } from 'jwt-decode'
import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

const getExpiryTime = (userTime) => {
    let tokenExpiry = userTime * 1000
    let beforeExpiryTime = tokenExpiry - 4000

    let userExpiry = new Date(beforeExpiryTime)
    let currentTime = new Date()

    return userExpiry.getTime() - currentTime.getTime()
}

const login = (setUser) => (token) => {
    let userToken = token ? token : localStorage.getItem('token') ? localStorage.getItem('token') : ''
    let user = userToken ? jwtDecode(userToken) : null

    if (user) setUser(user)
}

const logout = (setUser, navigate) => () => {
    setUser('')
    localStorage.removeItem('token')
    navigate(LOGIN_URL)
}

const isTokenExpired = (userTime) => {
    if (!userTime) return true

    let timeDifference = getExpiryTime(userTime)

    return timeDifference <= 0 ? true : false
}

const isAuthenticated = () => {
    let token = localStorage.getItem('token')

    if (!token) return false
    let user = token ? jwtDecode(token) : null

    return Boolean(user && !isTokenExpired(user?.exp))
}

export const AuthContextProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState('')

    const { pathname } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated()) login(setUserDetails)()
    }, [])

    useEffect(() => {
        if (PROTECTED_ROUTES.includes(pathname) && !isAuthenticated()) {
            navigate(LOGIN_URL)
        }

        if (UNPROTECTED_ROUTES.includes(pathname) && isAuthenticated()) {
            navigate(DISCOVER_URL)
        }
    }, [navigate, pathname])

    useEffect(() => {
        let timer
        if (userDetails) {
            let timeDifference = getExpiryTime(userDetails.exp)

            timer = setTimeout(logout(setUserDetails, navigate), timeDifference)
        }

        return () => clearTimeout(timer)
    }, [navigate, userDetails])

    return (
        <AuthContext.Provider
            value={{ userDetails, login: login(setUserDetails), logout: logout(setUserDetails, navigate) }}
        >
            {children}
        </AuthContext.Provider>
    )
}

AuthContextProvider.propTypes = {
    children: PropTypes.node,
}
