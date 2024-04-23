import { AuthConnector } from 'Core/Connectors/AuthConnector'

import { convertIntoErrorData, convertIntoSuccessData } from '../StoreUtility'

export const LoginRequest = async (formData) => {
    try {
        const { data, error } = await AuthConnector.login(formData)

        if (data) {
            return convertIntoSuccessData(data)
        }

        if (error) {
            return convertIntoErrorData(error)
        }
    } catch (error) {
        return convertIntoErrorData('Network Error')
    }
}
