
// External dependencies.
var Backbone = require('backbone');

// Defining the application router.
var Router = Backbone.Router.extend({
    routes: {
        '': 'index',
        'about': 'about'

    },

    index: function() {
        console.log('Welcome to your / route.');
    },

    about: function() {
        console.log('Welcome to about page.');
    }


});

module.exports = Router;

