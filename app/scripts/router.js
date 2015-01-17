
// External dependencies.
var Backbone = require('backbone');
var $ = require('jquery');

// Main View:
var MainView = require('./views/main');

// Views:
var HomeView = require('./views/home');
var Menu = require('./views/menu');

var mainView = new MainView ();
$('#main').replaceWith(mainView.$el);


var menu = new Menu();
$('nav').replaceWith(menu.$el);

// Defining the application router.
var Router = Backbone.Router.extend({
    routes: {
        '': 'index',
        'about': 'about'

    },

    index: function() {
        menu.setSelectedSection('home');
        var homeView = new HomeView();
        $('article').replaceWith(homeView.$el);
    },

    about: function() {
        menu.setSelectedSection('about');
        //$('article').append(homeView.$el);
        console.log('Welcome to about page.');
    }


});

module.exports = Router;

