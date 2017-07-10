<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

$dev = array(
    'server' => 'localhost',
    'user' => 'root',
    'password' => '',
    'database' => 'sa_dev');

$develop = array(
    'server' => 'localhost',
    'user' => 'sa',
    'password' => 'wEmdQuVXGjSHQtWF',
    'database' => 'sa_develop');

$staging = array(
    'server' => 'localhost',
    'user' => 'sa',
    'password' => 'wEmdQuVXGjSHQtWF',
    'database' => 'sa_staging');

$production = array(
    'server' => 'localhost',
    'user' => '',
    'password' => '',
    'database' => '');

return array(
    '*' => array(
        'tablePrefix' => 'craft',
    ),
    '.dev' => $dev,
    'localhost' => $dev,
    '192.168.1' => $dev,
    'sa-dev.sekkithub.com' => $develop,
    'sa-stage.sekkithub.com' => $staging,
    'www.sample.com' => $production
);
