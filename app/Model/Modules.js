'use strict'

const Lucid = use('Lucid')

class Modules extends Lucid {
  typeModule () {
    return this.hasOne('App/Model/TypeModule')
  }
}

module.exports = Modules
