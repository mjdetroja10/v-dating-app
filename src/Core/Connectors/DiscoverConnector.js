import { fetchWrapper } from 'Core/FetchWrapper/fetchWrapper'

const baseUrl = process.env.REACT_APP_BASE_URL

export class DiscoverConnector {
    static async discoverList(query) {
        return await fetchWrapper.get(`${baseUrl}/auth/discover/?page=${query.page}&pageSize=${query.pageSize}`, {})
    }

    static async singleUser(id) {
        return await fetchWrapper.get(`${baseUrl}/auth/discover/${id}`, {})
    }
}
