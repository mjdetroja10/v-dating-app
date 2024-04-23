import { fetchWrapper } from 'Core/FetchWrapper/fetchWrapper'

const baseUrl = process.env.REACT_APP_BASE_URL

export class AuthConnector {
    static async login(body) {
        return fetchWrapper.post(`${baseUrl}/login`, { body })
    }

    static async signUp(body) {
        return fetchWrapper.formDataSubmit(`${baseUrl}/sign-up`, { body })
    }
}
