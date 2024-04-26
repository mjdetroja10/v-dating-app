import { responseStatus } from 'Infrasctructure/store/StoreUtility'
import { useState } from 'react'

export const useFetchData = ({ request, onSuccess, onError }) => {
    const [loading, setLoading] = useState(false)

    async function fetchData(params) {
        setLoading(true)
        const response = await request(params)
        setLoading(false)

        if (response?.status === responseStatus.SUCCESS) {
            onSuccess(response.data)
            return
        }

        if (response?.status === responseStatus.ERROR) {
            onError(response.error)
            return
        }
    }

    return [fetchData, loading]
}
