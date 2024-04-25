import { UserContext } from 'Application/Contexts/UserContext'
import { useContext } from 'react'

export const useUserDetails = () => {
    return useContext(UserContext)
}
