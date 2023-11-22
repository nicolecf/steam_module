<?php

namespace Drupal\steam_module\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Hello' Block.
 *
 * @Block(
 *   id = "steam_block",
 *   admin_label = @Translation("Steam block"),
 *   category = @Translation("Steam World"),
 * )
 */
class SteamBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      '#attached' => [
        'library' => [
          'commerce_cart_flyout/flyout',
        ],
        'drupalSettings' => [
          'steamBlock' => [
            'templates' => [
              'steam' => $this->renderTemplate('steam')
            ]
          ]
        ]
      ],
      '#markup' => Markup::create('<div class="steam-block"></div>'),
    ];
  }

}