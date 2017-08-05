'use strict'

const Schema = use('Schema')

class TypeModuleTableSchema extends Schema {

  up () {
    this.create('type_modules', (table) => {
      table.increments()
      table.string('name')
      table.string('icon')
      table.string('link')
      table.string('view_path')
      table.string('controller_path')
      table.timestamps()
    })
  }

  down () {
    this.drop('type_modules')
  }

}

module.exports = TypeModuleTableSchema
