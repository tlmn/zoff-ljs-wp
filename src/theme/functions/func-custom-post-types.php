<?php

function custom_post_type_beschluss()
{
    register_post_type('beschluss', [
        'labels' => [
            'name' => __('Beschlüsse', 'textdomain'),
            'singular_name' => __('Beschluss', 'textdomain'),
        ],
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-database',
        'supports' => ['title', 'editor'],
        'taxonomies' => ['resolution', 'topic', 'type'],
    ]);
}

function custom_post_type_termin()
{
    register_post_type('event', [
        'labels' => [
            'name' => __('Termine', 'textdomain'),
            'singular_name' => __('Termin', 'textdomain'),
        ],
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-calendar-alt',
        'supports' => ['title', 'editor'],
        'taxonomies' => ['event', 'topic', 'type'],
    ]);
}

function custom_post_type_meldungen()
{
    register_post_type('notification', [
        'labels' => [
            'name' => __('Meldungen', 'textdomain'),
            'singular_name' => __('Meldung', 'textdomain'),
        ],
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-admin-post',
        'supports' => ['title', 'editor'],
        'taxonomies' => ['notification'],
    ]);
}
