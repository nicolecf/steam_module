/**
 * @file
 * A Backbone view for the Steam.
 */

(function ($, Backbone, Drupal) {
  Drupal.mySteam.SteamView = Backbone.View.extend({
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

      const template = _.template(Drupal.settings.steamBlock.templates.steam);
      console.log(template);
      template(this.model);
      return this;
    },
  });
})(jQuery, Backbone, Drupal);
