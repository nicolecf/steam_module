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

    urlRoot: '/steam/get_all_games'

  });
})(Backbone, Drupal);
