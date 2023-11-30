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
      if (!window.matchMedia('only screen').matches) {
        return;
      }

      once('steam_module_my_steam', '.steam-block').forEach(function(el) {
        const model = Drupal.mySteam.model = new Drupal.behaviors.SteamModel();
        console.log(model);
        model.fetch( );
        Drupal.mySteam.view = new Drupal.behaviors.SteamView({
          el: this,
          model: model
        });
        $(this).append(Drupal.mySteam.view.render());
      });
    }
  };


})(jQuery, Drupal, once);
