var $ = require('jquery');
var Backbone = require('backbone');
var template = require('../../templates/menu.hbs');

Backbone.$ = $;

module.exports = Backbone.View.extend({

    menuConfig:{},

    initialize: function () {
        this.setSelectedSection('home');
    },

    setSelectedSection: function (section) {
        var menuConfig = {};

        menuConfig[section] = true;
        this.render(menuConfig);
    },

    render: function (menuConfig) {
        this.$el.html(template(menuConfig));
        return this;
    }

});