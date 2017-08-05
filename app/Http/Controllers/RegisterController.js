'use strict'

const User = use('App/Model/User')
const Validator = use('Validator')

class RegisterController {
  * index (request, response) {
    yield response.sendView('auth/register', {})
  }

  * register (request, response) {


    const userData = request.all()
    const validation = yield Validator.validate(userData, User.rules)

    if (validation.fails()) {
      var message = validation.messages()
      yield request
        .with({type: 'error',
          messages: message[0].message
        })
        .flash()
      response.redirect('/register')
      return
    }else
    {
      const user = new User({username: userData.username, email: userData.email, password: userData.password})
      yield user.save()

      yield request
        .with({type: 'success',
          messages: 'Registration Successfull'})
        .flash()
      yield response.redirect('login')
    }

  }
}

module.exports = RegisterController
