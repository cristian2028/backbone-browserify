var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var Router = require('./router');
var router = new Router();

module.exports = {
    start: function(){
        Backbone.history.start();
    }
};