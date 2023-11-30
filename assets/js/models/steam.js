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
  Drupal.behaviors.SteamModel = Backbone.Model.extend({

    url: '/steamModule/web/steam/get_all_games'

  });
})(Backbone, Drupal);
