export const get = async ({url, options = {}}) => {
  const requestOptions = {
    method: 'GET',
    ...options
  }

  return await fetch(url, requestOptions)
}

export const post = async ({url, body = {}, options = {}}) => {
  const requestOptions = {
    method: 'POST',
    headers: {...options},
    body: JSON.stringify(body)
  }

  return await fetch(url, requestOptions)
}