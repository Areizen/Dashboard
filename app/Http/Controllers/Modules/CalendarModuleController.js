/**
 * Created by root on 30/06/17.
 */
'use strict'

const CalendarModule = use('App/Model/CalendarModule')
const Notification = use('App/Model/Notification')

class CalendarModuleController {
  * full (request, response) {
    const dates = yield request.currentUser.calendarModule()
    const data = yield request.currentUser.moduleData(request, response)
    const notifications = yield request.currentUser.notifications(request, response)
    yield response.sendView('modules/calendar_module/full', {modules: data, events: dates, notifications: notifications})
  }

  * data (request, response) {
    return yield request.currentUser.calendarModule()
  }

  * event (user) {
    var dates = yield user.calendarModule().where('start', '>', Date.now())
    dates.forEach(function (date) {
      var current = new Date(Date.now())
      var dateCal = new Date(date.start)
      var diff = (dateCal - current) / 1000
      diff /= 60
      console.log(diff)
      if (Math.round(diff) === 0) {
        var notification = new Notification()
        notification.user_id = user.id
        notification.icon = 'event'
        notification.link = '/calendar_module'
        notification.content = 'An event has just started : "' + date.title + '"'
      }
    })
  }

  * index (request, response) {
    response.send(yield request.currentUser.calendarModule())
  }

  * create (request, response) {
    let calendar = new CalendarModule()
    calendar.title = request.input('title')
    calendar.start = request.input('start')
    calendar.end = request.input('end')
    calendar.user_id = request.currentUser.id

    yield calendar.save()
    yield response.json(calendar.id)
  }

  * update (request, response) {
    let calendar = yield CalendarModule.findBy('id', request.input('id'))
    if (calendar.user_id === request.currentUser.id) {
      calendar.title = request.input('title')
      calendar.start = request.input('start')
      calendar.end = request.input('end')

      yield calendar.save()
    }
  }

  * delete (request, response) {
    let calendar = yield CalendarModule.findBy('id', request.input('id'))
    if (calendar.user_id === request.currentUser.id) {
      yield calendar.delete()
    }
  }
}
module.exports = CalendarModuleController
