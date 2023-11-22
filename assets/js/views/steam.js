/**
 * @file
 * A Backbone view for the Steam.
 */

(function ($, Backbone, Drupal, DrupalSettings) {
  Drupal.mySteam.SteamView = Backbone.View.extend({
    events: { 
      'click .my-steam--next-page': 'onNextClick',
      'click .my-steam--previous-page': 'onPrevClick',
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
      
      const template = _.template(DrupalSettings.steamBlock.templates.steam);
      template(this.model);
      return this;
    },
    onNextClick: function onNextClick(event) {
      this.model.nextPage();
      event.preventDefault();
      event.stopPropagation();
    },
    onPrevClick: function onPrevClick(event) {
      this.model.previousPage();
      event.preventDefault();
      event.stopPropagation();
    }
  });
})(jQuery, Backbone, Drupal);