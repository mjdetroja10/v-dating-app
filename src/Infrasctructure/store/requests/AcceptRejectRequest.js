import { FriendRequestConnector } from 'Core/Connectors/FriendRequestConnector'

import { convertIntoErrorData, convertIntoSuccessData, unAuthorized } from '../StoreUtility'

export const AcceptRejectRequest = async (formData) => {
    try {
        const { data, error } = await FriendRequestConnector.accecptRejectRequest(formData)

        if (error?.forceLogout) {
            unAuthorized(error)
            return
        }

        if (data) return convertIntoSuccessData(data)

        return convertIntoErrorData(error)
    } catch (error) {
        return convertIntoErrorData(error)
    }
}
