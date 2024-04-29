import { FriendsConnector } from 'Core/Connectors/FriendsConnector'

import { convertIntoSuccessData, unAuthorized } from '../StoreUtility'

export const MyFriendsRequest = async () => {
    try {
        const { data, error } = await FriendsConnector.myFriends()

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
