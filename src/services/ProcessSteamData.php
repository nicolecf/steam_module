<?php

namespace Drupal\steam_module\services;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use Drupal\Core\Config\ConfigFactory;

/**
 * Class CustomGetServices for get data from third party API service.
 * @package Drupal\CustomGetServices\Services.
 */
class ProcessSteamData {


  const STEAM_API = "http://api.steampowered.com/IPlayerService/GetOwnedGames/";

  const GET_GAMES_URL = "GetOwnedGames/v0001/";

  protected $configFactory;

  /**
   * CustomGetServices constructor.
   * @param \Drupal\Core\Config\ConfigFactory $configFactory
   */
  public function __construct(ConfigFactory $configFactory) {
    $this->configFactory = $configFactory;
  }

  /**
   * Get All Games data.
   *
   * @return \Drupal\Component\Render\MarkupInterface|string
   *   Return a JSON string with all games.
   */
  public function getGamesData() {

    // $config = $this->configFactory->get('steam_module.settings');
    // $url = self::STEAM_API . self::GET_GAMES_URL . "?key=" . $config->get('api_key') . "&steamid=" . $config->get('user_id') . "&format=json";
    $url = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=<Key>&steamid=<steamUserNumber>&format=json&include_appinfo=1";
    $client = \Drupal::httpClient();
    $result = [];

    try {
      $response = $client->get($url);
      $data = $response->getBody();
      $result = json_decode($data);

      return ($result);
    }
    catch (RequestException $e) {
      \Drupal::logger('steam_module')->notice($e);
    }
  }

}
