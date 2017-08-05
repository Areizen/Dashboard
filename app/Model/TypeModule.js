'use strict'

const Lucid = use('Lucid')

class TypeModule extends Lucid {
  modules () {
    return this.belongToMany('App/Model/Modules')
  }
}

module.exports = TypeModule
