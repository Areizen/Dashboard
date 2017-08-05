'use strict'

class ModuleController {
  * configure (request, response) {
    yield response.sendView('modules/module_configuration', {modules: yield request.currentUser.modules()})
  }
}

module.exports = ModuleController
