<?php

// phpcs:ignoreFile

// Include the default.settings.php file.
include $app_root . '/' . $site_path . '/default.settings.php';

$settings['config_sync_directory'] = realpath($app_root . '/../config/sync');

$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';

// Automatically generated include for settings managed by ddev.
if (getenv('IS_DDEV_PROJECT') == 'true' && file_exists(__DIR__ . '/settings.ddev.php')) {
  include __DIR__ . '/settings.ddev.php';
}
