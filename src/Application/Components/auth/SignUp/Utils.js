export const allPatterns = {
    alph: /^[a-zà-ýA-ZÀ-Ý]+$/g,
    num: /^0|[1-9]\d*$/,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
}

export const requiredField = (label, patternValue, value = {}) => {
    let pattern = patternValue ? { value: patternValue, message: 'invalid value' } : {}
    let minLength = value?.min
        ? {
              value: value?.min,
              message: `must be ${value?.min} chars`,
          }
        : {}

    let maxLength = value?.max
        ? {
              value: value?.max,
              message: `at least ${value?.max} char required`,
          }
        : {}

    return { required: { value: true, message: `${label} is required field` }, pattern, minLength, maxLength }
}

export const generateImageErrorMessage = (fieldValueLength) => {
    return fieldValueLength < 2 ? 'you must select at least two images' : ''
}
