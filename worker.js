// import { json } from 'https://pkg.do/apis.do'
import { json } from 'http://pkg.do/itty-router-extras'

export default {
  fetch: req => {
    const headers = Object.fromEntries(req.headers)
    const ctx = JSON.parse(headers['ctx-do'])
    json(ctx)
  }
}

