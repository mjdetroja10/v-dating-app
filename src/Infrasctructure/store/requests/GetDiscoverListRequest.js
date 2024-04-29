import { DiscoverConnector } from 'Core/Connectors/DiscoverConnector'

import { convertIntoSuccessData, unAuthorized } from '../StoreUtility'

export const GetDiscoverListRequest = async (query) => {
    try {
        const { data, error } = await DiscoverConnector.discoverList(query)

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
