'use strict'

const Factory = use('Factory')
const TypeModule = use('App/Model/TypeModule')

class CalendarModuleSeeder {
  * run () {
    var module = new TypeModule()
    module.name = 'Calendar'
    module.icon = 'event'
    module.link = '/calendar_module'
    module.view_path = 'modules/calendar_module'
    module.controller_path = 'App/Http/Controllers/Modules/CalendarModuleController'
    yield module.save()
  }

}

module.exports = CalendarModuleSeeder
