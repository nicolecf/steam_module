<?php

namespace Drupal\steam_module\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Displays Form to config.
 *
 * @internal
 */
class ConfigurationForm extends ConfigFormBase {
  
   /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'steam_module_settings';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['steam_module.settings'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $types = node_type_get_names();
    $config = $this->config('steam_module.settings');
    $form['steam_module_user_id'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Steam User number'),
      '#default_value' => $config->get('user_id'),
      '#description' => $this->t('Steam User Number, how to get access link.'),
      '#required' => TRUE,
    ];
    $form['steam_module_api_key'] = [
      '#type' => 'textfield',
      '#title' => $this->t('API key'),
      '#default_value' => $config->get('api_key'),
      '#description' => $this->t('API key, you will get here'),
      '#required' => TRUE,
    ];

    return parent::buildForm($form, $form_state);
  }

    /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    
    $user_id = $form_state->getValue('steam_module_user_id');
    $api_key = $form_state->getValue('steam_module_api_key');
    $this->config('steam_module.settings')
      ->set('user_id', $user_id)
      ->set('api_key', $api_key)
      ->save();

    parent::submitForm($form, $form_state);
  }
}