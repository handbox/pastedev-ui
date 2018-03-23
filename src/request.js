export default async function request (url, options = {}, extractBodyMethod = 'json') {
  const response = await fetch(url, options)
  if (!response.ok) {
    const error = new TypeError(
      `Network request to ${response.url} failed: ${response.status} ${response.statusText}`
    )
    error.response = response
    throw error
  }
  return extractBodyMethod ? response[extractBodyMethod]() : response
}
