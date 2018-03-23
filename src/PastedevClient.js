// let request = require('request')
/*
export class PastedevClient {
  constructor ({endpoint}) {
    Object.assign(this, {endpoint})
  }

  request (url, options = {}) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }

    let result = {}
    request(this.endpoint + url, {...options, headers}, (err, resp, body) => {
      if (err) { return console.log(err) }
      // console.log(body.content)
      Object.assign(result, {id: body.id, content: body.content, title: body.title})
      // result.content = body.content
    })

    return result
  } */
import request from './request'

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
