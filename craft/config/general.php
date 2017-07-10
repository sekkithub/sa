<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
    '*' => array(
        'omitScriptNameInUrls' => true,
        'allowAutoUpdates' => false,
        'defaultImageQuality' => 85,
        'cpTrigger' => 'sacp'
    ),

    'localhost' => array(
        'devMode' => true,
        'siteUrl' => 'http://localhost:8080',
        'environmentVariables' => array(
          'baseUrl' => 'http://localhost:8080/',
          'basePath' => '../public'
        ),
        'environment' => 'dev'
    ),

    '.dev' => array(
        'devMode' => true,
        'siteUrl' => 'http://sa.dev',
        'environmentVariables' => array(
          'baseUrl' => 'http://sa.dev',
          'basePath' => '../public/'
        ),
        'environment' => 'dev'
    ),

    'sa-dev.sekkithub.com' => array(
        'devMode' => false,
        'cooldownDuration' => 0,
        'environmentVariables' => array(
          'baseUrl' => 'http://sa-dev.sekkithub.com',
          'basePath' => '/home/deployer/apps/sa/develop/public/',
        ),
        'siteUrl' => 'http://sa-dev.sekkithub.com',
        'environment' => 'develop'
    ),

    'sa-stage.sekkithub.com' => array(
        'devMode' => false,
        'cooldownDuration' => 0,
        'environmentVariables' => array(
          'baseUrl' => 'http://sa-stage.sekkithub.com',
          'basePath' => '/home/deployer/apps/sa/staging/public/',
        ),
        'siteUrl' => 'http://sa-stage.sekkithub.com',
        'environment' => 'staging'
    ),

    'www.dinnerbyheston.com' => array(
        'cooldownDuration' => 0,
        'siteUrl' => 'http://www.sample.com',
        'environment' => 'production'
    ),
);
