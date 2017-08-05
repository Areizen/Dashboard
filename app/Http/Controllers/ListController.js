'use strict'

class ListController {
  * show (request, response) {
    const values = yield request.currentUser.moduleData(request, response)
    const notifications = yield request.currentUser.notifications(request, response)
    console.log(notifications)
    yield response.sendView('welcome', {modules: values, notifications: notifications})
  }
}

module.exports = ListController
