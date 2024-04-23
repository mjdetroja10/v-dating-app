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
