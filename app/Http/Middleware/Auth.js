'use strict'

class Auth {
  * handle (request, response, next) {
    const isLoggedIn = yield request.auth.check()
    if (!isLoggedIn) {
      yield request
        .with({type: 'success',
          messages: 'You must authenticate to access your account'})
        .flash()
      return response.redirect('/login')
    } else {
      yield next
    }
  }
}

module.exports = Auth
