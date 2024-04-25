import { jwtDecode } from 'jwt-decode'
import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'

export const UserContext = createContext()

const updateUser = (setUser) => (token) => {
    if (!token) return null
    let decode = jwtDecode(localStorage.getItem('token'))
    if (decode) setUser(decode)
}

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState('')

    useEffect(() => {
        if (localStorage.getItem('token')) {
            updateUser(setUser)(localStorage.getItem('token'))
        }
    }, [])

    return <UserContext.Provider value={{ user, updateUser: updateUser(setUser) }}>{children}</UserContext.Provider>
}

UserContextProvider.propTypes = {
    children: PropTypes.node,
}
