'use strict'

const Lucid = use('Lucid')

class CalendarModule extends Lucid {
  user () {
    return this.belongsToOne('App/Model/User')
  }

  data () {
    return {}
  }
}

module.exports = CalendarModule
