'use strict'

const Schema = use('Schema')

class ModulesTableSchema extends Schema {
  up () {
    this.create('modules', (table) => {
      table.increments()
      table.int('user_id').notNullable().unique()
      table.int('place')
      table.int('type_module_id').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('modules')
  }

}

module.exports = ModulesTableSchema
