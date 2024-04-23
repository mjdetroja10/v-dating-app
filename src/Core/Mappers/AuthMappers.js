export const mapLoginFormDataToData = (data) => ({
    email: data.email,
    password: data.password,
})

export const mapSignUpFormDataToData = (data) => {
    let formData = new FormData()

    Object.keys(data).forEach((key) => {
        if (Array.isArray(data[key])) {
            data[key].forEach((value, index) => {
                let nestKey = key === 'images' ? 'images' : `${key}[${index}]`
                formData.append(nestKey, value)
            })
        } else {
            formData.append(key, data[key])
        }
    })

    return formData
}
