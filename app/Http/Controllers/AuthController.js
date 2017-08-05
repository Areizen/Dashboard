'use strict'

class AuthController {
  //  Fonction principale
  * index (request, response) {
    yield response.sendView('auth/login', {})
  }

  // Fonction permettant d'authentifier
  * login (request, response) {
    const email = request.input('email')
    const password = request.input('password')

    const authCheck = yield request.auth.attempt(email, password)
    if (authCheck) {
      yield request
        .with({type: 'success',
          messages: 'Logged in Successfully'})
        .flash()
      return response.redirect('/')
    }

    yield request
      .with({type: 'error',
        messages: 'Invalid Credentials'})
      .flash()
    return response.redirect('/')
  }

  //  Fonction permettant de se déconnecter
  * logout (request, response) {
    yield request.auth.logout()
    yield request
      .with({type: 'success',
        messages: 'Logged out Successfully'})
      .flash()
    return response.redirect('/')
  }
}

module.exports = AuthController
