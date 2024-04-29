import { LOGIN_URL } from 'Application/Constants/RouteConstant'

export const responseStatus = { SUCCESS: 'SUCCESS', ERROR: 'ERROR' }

export const convertIntoSuccessData = (data) => ({ status: responseStatus.SUCCESS, data })

export const convertIntoErrorData = (error) => ({ status: responseStatus.ERROR, error })

export const hasValidationError = (response) =>
    response.status === responseStatus.ERROR && Array.isArray(response.error)

export const convertIntoValidationError = (errors) => {
    if (errors.length > 0) {
        return errors.map((error) => ({ param: error?.path, ...error }))
    }
}

export const unAuthorized = (error) => {
    if (error.forceLogout) {
        localStorage.removeItem('token')
        window.location.href = LOGIN_URL
    }
}
