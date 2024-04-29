import { FriendRequestConnector } from 'Core/Connectors/FriendRequestConnector'

import { convertIntoSuccessData, unAuthorized } from '../StoreUtility'

export const GetPendingRequestList = async () => {
    try {
        const { data, error } = await FriendRequestConnector.pendingRequestList()

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
