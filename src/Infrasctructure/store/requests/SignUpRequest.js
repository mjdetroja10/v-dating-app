import { AuthConnector } from 'Core/Connectors/AuthConnector'
import { mapSignUpFormDataToData } from 'Core/Mappers/AuthMappers'

import { convertIntoErrorData, convertIntoSuccessData } from '../StoreUtility'

export const SignUpRequest = async (params) => {
    try {
        let formData = mapSignUpFormDataToData(params)
        const { data, error } = await AuthConnector.signUp(formData)

        if (data) return convertIntoSuccessData(data)

        if (error) return convertIntoErrorData(error)
    } catch (error) {
        return convertIntoErrorData(error)
    }
}
