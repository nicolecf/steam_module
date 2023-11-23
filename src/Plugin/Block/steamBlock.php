<?php

namespace Drupal\steam_module\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Render\RenderContext;
use Drupal\Core\Render\RendererInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

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
   * The renderer.
   *
   * @var \Drupal\Core\Render\RendererInterface
   */
  protected $renderer;
  
  public function __construct(RendererInterface $renderer) {
    $this->renderer = $renderer;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('renderer')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      '#attached' => [
        'library' => [
          'steam_module/steam_block',
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

  /**
   * Renders a template.
   *
   * @param string $hook
   *   The theme hook.
   *
   * @return string
   *   The rendered template.
   */
  protected function renderTemplate($hook) {
    return $this->renderer->executeInRenderContext(new RenderContext(), function () use ($hook) {
      $build = ['#theme' => $hook];
      return $this->renderer->render($build);
    });
  }

}