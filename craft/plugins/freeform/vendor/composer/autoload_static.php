<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit35bc90897394193951fd4051c21106df
{
    public static $files = array (
        '2c102faa651ef8ea5874edb585946bce' => __DIR__ . '/..' . '/swiftmailer/swiftmailer/lib/swift_required.php',
    );

    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Symfony\\Component\\PropertyAccess\\' => 33,
            'Solspace\\Freeform\\Library\\' => 26,
        ),
        'H' => 
        array (
            'Hashids\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Symfony\\Component\\PropertyAccess\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/property-access',
        ),
        'Solspace\\Freeform\\Library\\' => 
        array (
            0 => __DIR__ . '/../..' . '/Library',
        ),
        'Hashids\\' => 
        array (
            0 => __DIR__ . '/..' . '/hashids/hashids/lib/Hashids',
        ),
    );

    public static $prefixesPsr0 = array (
        'T' => 
        array (
            'Test\\Markdownify' => 
            array (
                0 => __DIR__ . '/..' . '/pixel418/markdownify/test',
            ),
        ),
        'M' => 
        array (
            'Markdownify' => 
            array (
                0 => __DIR__ . '/..' . '/pixel418/markdownify/src',
            ),
        ),
        'E' => 
        array (
            'Egulias\\' => 
            array (
                0 => __DIR__ . '/..' . '/egulias/email-validator/src',
            ),
        ),
        'D' => 
        array (
            'Doctrine\\Common\\Lexer\\' => 
            array (
                0 => __DIR__ . '/..' . '/doctrine/lexer/lib',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit35bc90897394193951fd4051c21106df::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit35bc90897394193951fd4051c21106df::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit35bc90897394193951fd4051c21106df::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}
