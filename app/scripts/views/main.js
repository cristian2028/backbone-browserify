var $ = require('jquery');
var Backbone = require('backbone');
var template = require('../../templates/main.hbs');

Backbone.$ = $;

module.exports = Backbone.View.extend({

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(template());
        return this;
    }

});