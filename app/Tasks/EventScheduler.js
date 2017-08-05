'use strict'

const User = use('App/Model/User')

class EventScheduler {
  // This is required. This is the schedule for which the task will run.
  // More docs here: https://github.com/node-schedule/node-schedule#cron-style-scheduling
  static get schedule () {
    return '*/1 * * * *'
  }

  // This is the function that is called at the defined schedule
  * handle () {
    const usersWrapper = yield User.all()
    yield * usersWrapper.map(function * (user) {
      const typeModulesWrapper = yield user.typeModule()
      yield * typeModulesWrapper.map(function * (typeModule) {
        try {
          const Controller = use(typeModule.controller_path)
          const controller = new Controller()
          yield controller.event(user)
        } catch (e) {
          console.log('Une erreur est survenu pendant le chargement du controller')
        }
      })
    })
  }
}

module.exports = EventScheduler
