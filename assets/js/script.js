/**
 * @file
 * Activate the Steam.
 */

(function ($, Drupal, once) {
  Drupal.behaviors.mySteam = {
    attach: function attach(context, settings) {
      if (!window.matchMedia('only screen').matches) {
        return;
      }

      once('steam_module_my_steam', '.steam-block').forEach(function(el) {
        console.log('teste');
        const model = Drupal.mySteam.model = new Drupal.mySteam.SteamModel({
          pages: $(this).find('.my-steam--page')
        });

        Drupal.mySteam.view = new Drupal.mySteam.SteamView({
          el: this,
          model: model
        });
      });
    }
  };

  Drupal.mySteam = Drupal.mySteam || {
    models: {},
    views: {},
    
    getGameList: function () {
      const url =  Drupal.url('getGames?');
      jQuery.get(url).done(respose => {
        Drupal.mySteam.SteamModel.set('count', 5);
        Drupal.mySteam.SteamModel.set('pages', 5);
      });
    }
  };

})(jQuery, Drupal, once);