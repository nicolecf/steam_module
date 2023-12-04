/**
 * @file
 * Activate the Steam.
 */

(function ($, Drupal, once) {

  Drupal.mySteam = Drupal.mySteam || {
    SteamModel: {},
    SteamView: {}
  };

  Drupal.behaviors.mySteam = {
    attach: function attach(context, settings) {
      once('steam_module_my_steam', '.steam-block').forEach(function(el) {
        let model = Drupal.mySteam.model = new Drupal.behaviors.SteamModel();
        model.fetch();

        Drupal.mySteam.view = new Drupal.behaviors.SteamView({
          el: el,
          model: model
        });

        $(el).append(Drupal.mySteam.view.render());
      });
    }
  };


})(jQuery, Drupal, once);
