<?php

namespace Drupal\steam_module\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\steam_module\services\ProcessSteamData;
use Symfony\Component\HttpFoundation\JsonResponse;

class SteamData extends ControllerBase
{
  /**
   * @var Symfony\Component\HttpFoundation\JsonResponse;
   */
  protected $steamData;

  /**
   * @param Drupal\steam_module\services\ProcessSteamData $steamData
   */
  public function __construct(ProcessSteamData $steamData) {
    $this->steamData = $steamData;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('steam_module.processSteamData')
    );
  }

  public function getAllGames() :JsonResponse {
    $dataSteam = $this->steamData->getGamesData();
    return new JsonResponse($dataSteam);
  }
}
