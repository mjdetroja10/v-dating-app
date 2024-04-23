import { convertIntoValidationError, hasValidationError, responseStatus } from 'Infrasctructure/store/StoreUtility'
import { useState } from 'react'

export const useFormSubmit = ({ request, onSuccess, onError }) => {
    const [loading, setLoading] = useState(false)

    async function formSubmit(formData) {
        setLoading(true)
        const response = await request(formData)
        setLoading(false)

        if (response.status === responseStatus.SUCCESS) {
            onSuccess(response.data)
            return
        }

        if (hasValidationError(response)) {
            const validationError = convertIntoValidationError(response.error)

            onError(validationError)
            return
        }

        onError(response.error)
    }

    return [formSubmit, loading]
}
