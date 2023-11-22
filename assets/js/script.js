/**
 * @file
 * Activate the Steam.
 */

(function ($, Drupal) {
  Drupal.behaviors.mySteam = {
    attach: function attach(context, settings) {
      if (!window.matchMedia('only screen').matches) {
        return;
      }
      
      $(context).find('.my-steam').once('mySteam').each(function(index) {
        var model = Drupal.mySteam.model = new Drupal.mySteam.SteamModel({
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

})(jQuery, Drupal);