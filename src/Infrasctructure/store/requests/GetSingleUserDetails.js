import { DiscoverConnector } from 'Core/Connectors/DiscoverConnector'

import { convertIntoSuccessData, unAuthorized } from '../StoreUtility'

export const GetSingleUserDetails = async (id) => {
    try {
        const { data, error } = await DiscoverConnector.singleUser(id)

        if (error?.forceLogout) {
            unAuthorized(error)
            return
        }

        if (data) return convertIntoSuccessData(data)

        if (error) return convertIntoSuccessData(error)
    } catch (error) {
        return convertIntoSuccessData(error)
    }
}
