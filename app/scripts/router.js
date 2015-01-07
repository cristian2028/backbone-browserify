
// External dependencies.
var Backbone = require('backbone');
var $ = require('jquery');

// Views:
var HomeView = require('./views/home');

homeView = new HomeView();

// Defining the application router.
var Router = Backbone.Router.extend({
    routes: {
        '': 'index',
        'about': 'about'

    },

    index: function() {
        $('#main').append(homeView.$el);
    },

    about: function() {
        console.log('Welcome to about page.');
    }


});

module.exports = Router;

