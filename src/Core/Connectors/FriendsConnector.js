import { fetchWrapper } from 'Core/FetchWrapper/fetchWrapper'

const baseUrl = process.env.REACT_APP_BASE_URL

export class FriendsConnector {
    static async myFriends() {
        return await fetchWrapper.get(`${baseUrl}/auth/friends`, {})
    }
}
