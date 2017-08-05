'use strict'

const Schema = use('Schema')

class CalendarModulesTableSchema extends Schema {

  up () {
    this.create('calendar_modules', (table) => {
      table.increments()
      table.int('user_id')
      table.string('title')
      table.string('start')
      table.string('end')
      table.boolean('notified').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('calendar_modules')
  }

}

module.exports = CalendarModulesTableSchema
