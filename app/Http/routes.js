'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.get('/login', 'AuthController.index')
Route.post('/login', 'AuthController.login')
Route.get('/logout', 'AuthController.logout')

Route.get('/register', 'RegisterController.index')
Route.post('/register', 'RegisterController.register').middleware('recaptcha')

Route.group('auth', function () {
  Route.get('/', 'ListController.show')
  Route.get('/module_configuration', 'ModuleController.configure')
  Route.get('/notification/:id', 'NotificationController.redirect')
}).middleware('auth')

Route.group('module', function () {
    Route.get('/calendar_module', 'Modules/CalendarModuleController.full')

    Route.get('/ajax/calendar_module', 'Modules/CalendarModuleController.index')
    Route.post('/ajax/calendar_module/create', 'Modules/CalendarModuleController.create')
    Route.post('/ajax/calendar_module/update', 'Modules/CalendarModuleController.update')
    Route.post('/ajax/calendar_module/delete', 'Modules/CalendarModuleController.delete')
}).middleware('auth')
