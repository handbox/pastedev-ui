let request = require('request')

export class PastedevClient {
  constructor ({endpoint}) {
    Object.assign(this, {endpoint})
  }

  request (url, options = {}) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
    return request(this.endpoint + url, {...options, headers})
  }

  listApis (options) {
    return this.request('/', options)
  }

  postPaste (paste, options) {
    Object.assign(options, {'method': 'POST', 'json': true, 'body': paste})
    return this.request('/pastes/', options)
  }

  listPastes (options) {
    return this.request('/pastes', options)
  }

  listUsers (options) {
    return this.request('/users', options)
  }

  listGroups (options) {
    return this.request('groups', options)
  }
}
