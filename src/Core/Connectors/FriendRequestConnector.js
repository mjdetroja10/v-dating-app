import { fetchWrapper } from 'Core/FetchWrapper/fetchWrapper'

const baseUrl = process.env.REACT_APP_BASE_URL

export class FriendRequestConnector {
    static async sendRequest(body) {
        return await fetchWrapper.post(`${baseUrl}/auth/send-request`, { body })
    }

    static async pendingRequestList() {
        return await fetchWrapper.get(`${baseUrl}/auth/pending-request`, {})
    }
}
