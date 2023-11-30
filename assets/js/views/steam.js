/**
 * @file
 * A Backbone view for the Steam.
 */

(function ($, Backbone, Drupal, drupalSettings) {
  Drupal.behaviors.SteamView = Backbone.View.extend({
    events: {
    },

    /**
     * Backbone view for the Steam.
     *
     * @constructs
     *
     * @augments Backbone.View
     */
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },

    /**
     * @inheritdoc
     *
     * @return {Drupal.mySteam.SteamView}
     *   The `SteamView` instance.
     */
    render: function render() {

      const template = _.template(drupalSettings.steamBlock.templates.steam);
      template(this.model);
      return this;
    },
  });
})(jQuery, Backbone, Drupal, drupalSettings);
