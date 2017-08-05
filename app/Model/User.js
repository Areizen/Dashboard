'use strict'

const Lucid = use('Lucid')
const Hash = use('Hash')

class User extends Lucid {

  static boot () {
    super.boot()

    /**
     * Hashing password before storing to the
     * database.
     */
    this.addHook('beforeCreate', function * (next) {
      this.password = yield Hash.make(this.password)
      yield next
    })
  }

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

  modules () {
    return this.hasMany('App/Model/Modules')
  }

  notifications () {
    return this.hasMany('App/Model/Notification').where('viewed', '=', false)
  }

  typeModule () {
    return this.hasManyThrough('App/Model/TypeModule', 'App/Model/Modules')
  }

  * moduleData (request, response) {
    const typeModule = yield this.typeModule()
    let values = []

    for (var i = 0; i < typeModule.length; i++) {
      var DataLoader = use(typeModule[i].controller_path)
      var Data = new DataLoader()
      var data = yield Data.data(request, response)
      values.push({
        view: typeModule[i].view_path,
        data: data,
        name: typeModule[i].name,
        icon: typeModule[i].icon,
        link: typeModule[i].link
      })
    }

    return values
  }

  calendarModule () {
    return this.hasMany('App/Model/CalendarModule').where('user_id', '=', this.id)
  }

  static get rules () {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required'
    }
  }

}

module.exports = User
