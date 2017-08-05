'use strict'

const User = use('App/Model/User')

class RegisterController {
  * index (request, response) {
    yield response.sendView('auth/register', {})
  }

  * register (request, response) {
    const user = new User()

    user.username = request.input('name')
    user.email = request.input('email')
    user.password = request.input('password')

    yield user.save()

    yield request
      .with({type: 'success',
        messages: 'Registration Successfull'})
      .flash()
    yield response.redirect('login')
  }
}

module.exports = RegisterController
