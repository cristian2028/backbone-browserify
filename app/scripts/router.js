
// External dependencies.
var Backbone = require('backbone');
var $ = require('jquery');

// Views:
var HomeView = require('./views/home');
var Menu = require('./views/menu');

var menu = new Menu();

// Defining the application router.
var Router = Backbone.Router.extend({
    routes: {
        '': 'index',
        'about': 'about'

    },

    index: function() {
        var homeView = new HomeView();
        $('#main').append(homeView.$el);
    },

    about: function() {
        console.log('Welcome to about page.');
    }


});

module.exports = Router;

