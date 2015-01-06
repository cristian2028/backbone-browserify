// Kick off the application.
var Router = require('router');
var app = require('app');
var Backbone = require('backbone');
// Define your master router on the application namespace and trigger all
// navigation from this instance.
app.router = new Router();

// Trigger the initial route and enable HTML5 History API support, set the
// root folder to '/' by default.  Change in app.js.
Backbone.history.start({ pushState: true, root: app.root });
