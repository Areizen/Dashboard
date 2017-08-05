'use strict'

const Schema = use('Schema')

class NotificationsTableSchema extends Schema {

  up () {
    this.create('notifications', (table) => {
      table.increments()
      table.int('user_id')
      table.string('content')
      table.string('link')
      table.string('icon')
      table.boolean('viewed').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('notifications')
  }

}

module.exports = NotificationsTableSchema
