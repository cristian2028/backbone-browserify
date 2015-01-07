var $ = require('jquery');
var Backbone = require('backbone');
var template = require('../../templates/home.hbs');

Backbone.$ = $;

module.exports = Backbone.View.extend({

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(template({title: "Home Page", body: "Home page content"}));
        return this;
    }

});