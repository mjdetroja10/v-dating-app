import { AuthContext } from 'Application/Contexts/AuthContext'
import { useContext } from 'react'

export const useAuth = () => useContext(AuthContext)
