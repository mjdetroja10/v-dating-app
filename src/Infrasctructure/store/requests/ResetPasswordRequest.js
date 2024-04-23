import { AuthConnector } from 'Core/Connectors/AuthConnector'

import { convertIntoErrorData, convertIntoSuccessData } from '../StoreUtility'

export const ResetPasswordRequest = (code) => async (formData) => {
    try {
        const convertedFormData = { code, password: formData?.password }

        const { data, error } = await AuthConnector.resetPassword(convertedFormData)

        if (data) {
            return convertIntoSuccessData(data)
        }

        if (error) return convertIntoErrorData(error)
    } catch (error) {
        return convertIntoErrorData(error)
    }
}
