<?php

function register_menu($locations = array())
{
    global $_wp_registered_nav_menus;

    add_theme_support('menus');

    foreach ($locations as $key => $value) {
        if (is_int($key)) {
            _doing_it_wrong(__FUNCTION__, __('Nav menu locations must be strings.'), '5.3.0');
            break;
        }
    }

    $_wp_registered_nav_menus = array_merge((array) $_wp_registered_nav_menus, $locations);
}

function wp_register_menus()
{
    register_menu(array(
        'top_menu' => __('Hauptmenü', 'text_domain'),
        'primary_menu' => __('Navigationsmenü', 'text_domain'),
        'footer_menu'  => __('Footer', 'text_domain'),
        'social-media_menu'  => __('Social Media', 'text_domain'),
    ));
}
