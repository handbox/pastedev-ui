import request from './request'
let requestLib = require('request')

export class PastedevClient {
  constructor ({endpoint}) {
    Object.assign(this, {endpoint})
  }

  request (url, options = {}) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
    if (options.method === 'POST') {
      return requestLib(this.endpoint + url, {...options, headers})
    } else {
      return request(this.endpoint + url, {...options, headers})
    }
  }

  listApis (options) {
    return this.request('/', options)
  }

  postPaste (paste, options = {}) {
    Object.assign(options, {'method': 'POST', 'json': true, 'body': paste})
    return this.request('/pastes/', options)
  }

  getPaste (pasteId, options = {}) {
    Object.assign(options, {'method': 'GET', 'json': true})
    return this.request(`/pastes/${pasteId}/`, options)
  }

  listPastes (options) {
    return this.request('/pastes/', options)
  }

  listUsers (options) {
    return this.request('/users/', options)
  }

  listGroups (options) {
    return this.request('groups/', options)
  }
}
