/**
 * @file
 * A Backbone view for the Steam.
 */

(function ($, Backbone, Drupal, drupalSettings) {
  Drupal.behaviors.SteamView = Backbone.View.extend({
    events: {
    },

    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function render() {
      const template = _.template(drupalSettings.steamBlock.templates.steam);
      const html = template(this.model);
      this.$el.html(html);
      return this;
    },
  });
})(jQuery, Backbone, Drupal, drupalSettings);
