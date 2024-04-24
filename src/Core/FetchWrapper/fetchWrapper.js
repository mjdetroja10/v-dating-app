export const fetchWrapper = {
    post,
    formDataSubmit,
}

const FETCH_METHOD = {
    POST: 'POST',
}

const commonHeaders = (headers) => {
    return {
        'Content-Type': 'application/json',
        ...headers,
    }
}

async function post(url, { body, headers = {} }) {
    return await fetch(url, {
        method: FETCH_METHOD.POST,
        body: JSON.stringify(body),
        headers: commonHeaders(headers),
    }).then(handleResponse)
}

async function formDataSubmit(url, { body }) {
    return await fetch(url, {
        method: FETCH_METHOD.POST,
        body: body,
        headers: {},
    }).then(handleResponse)
}

async function handleResponse(response) {
    const data = await response.json()

    if (!response.ok) {
        return { error: data?.data?.errors || data?.message }
    }

    return { data: data?.data || data?.message }
}
