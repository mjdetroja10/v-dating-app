import { fetchWrapper } from 'Core/FetchWrapper/fetchWrapper'

const baseUrl = process.env.REACT_APP_BASE_URL

export class AuthConnector {
    static async login(body) {
        return fetchWrapper.post(`${baseUrl}/login`, { body })
    }

    static async signUp(body) {
        return fetchWrapper.formDataSubmit(`${baseUrl}/sign-up`, { body })
    }

    static async forgotPassword(body) {
        return fetchWrapper.post(`${baseUrl}/forgot-password`, { body })
    }

    static async emailVerify(body) {
        return fetchWrapper.post(`${baseUrl}/email-verification`, { body })
    }
}
