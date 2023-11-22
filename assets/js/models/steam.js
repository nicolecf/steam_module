/**
 * @file
 * A Backbone Model for the Steam.
 */

(function (Backbone, Drupal) {
  /**
   * Backbone model for the Steam.
   *
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.mySteam.SteamModel = Backbone.Model.extend({

    /**
     * @type {object}
     *
     * @prop pages
     * @prop activePage
     */
    defaults: {
      /**
       * The active Steam page. All other pages should be hidden under
       * normal circumstances.
       *
       * @type {int}
       */
      activePage: 1,

      /**
       * The Steam pages.
       *
       * @type {array}
       */
      pages: [],
    },
    /**
     * Change the active page to the next.
     */
    nextPage: function() {
      this.set('activePage', this.get('activePage') + 1);
    },
    
    /**
     * Change the active page to the previous.
     */
    previousPage: function() {
      this.set('activePage', this.get('activePage') - 1);
    }
  });
})(Backbone, Drupal);