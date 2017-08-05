'use strict'

const Lucid = use('Lucid')

class Notification extends Lucid {
  user () {
    return this.belongTo('App/Model/User')
  }
}

module.exports = Notification
