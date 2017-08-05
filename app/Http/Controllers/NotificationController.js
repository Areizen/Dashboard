'use strict'

const Notification = use('App/Model/Notification')

class NotificationController {
  * redirect (request, response) {
    var notification = yield Notification.findBy('id', request.param('id'))
    if (notification != null && notification.user_id === request.currentUser.id) {
      notification.viewed = true
      yield notification.save()
      return response.redirect(notification.link)
    } else {
      yield request
        .with({type: 'success',
          messages: 'This notification doesn\'t exist'})
        .flash()
      return response.redirect('/')
    }
  }
}

module.exports = NotificationController
