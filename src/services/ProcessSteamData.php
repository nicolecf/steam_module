<?php

namespace Drupal\steam_module\services;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

/**
* Class CustomGetServices for get data from third party API service.
* @package Drupal\CustomGetServices\Services.
*/
class ProcessSteamData {


  const STEAM_API = "http://api.steampowered.com/IPlayerService/GetOwnedGames/";

  const GET_GAMES_URL = "GetOwnedGames/v0001/";

  protected $config_factory;

  /**
  * CustomGetServices constructor.
  *  @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
  */
  public function __construct(ConfigFactoryInterface $config_factory) {
    $this->config_factory = $config_factory;
  }
  /**
  * @return \Drupal\Component\Render\MarkupInterface|string
  */
  public function getGamesData() {
    $config = $this->configFactory->get('steam_module.settings');
    $url = self::STEAM_API . self::GET_GAMES_URL . "?key=" + $config->get('api_key') + "&steamid=" + $config->get('user_id') + "&format=json";
    $client = \Drupal::httpClient();
    $result = [];

    try {
      $response = $client->get($url);
      $data = $response->getBody();
      $result = json_decode($data);

      return ($result);
    } catch (RequestException $e) {
      \Drupal::logger('steam_module')->notice($e);
    }
  }
}