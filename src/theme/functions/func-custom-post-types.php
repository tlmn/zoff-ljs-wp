<?php 

function custom_post_type_beschluss()
{
    register_post_type(
        'beschluss',
        array(
            'labels'        => array(
                'name'          => __('Beschlüsse', 'textdomain'),
                'singular_name' => __('Beschluss', 'textdomain'),
            ),
            'public'        => true,
            'has_archive'   => true,
            'show_in_rest'  => true,
            'menu_icon'     => 'dashicons-database',
            'supports'      => array('title', 'editor'),
            'taxonomies'    => array( 'resolution', 'topic', 'type' )
        )
    );
}

function custom_post_type_termin()
{
    register_post_type(
        'termine',
        array(
            'labels'        => array(
                'name'          => __('Termine', 'textdomain'),
                'singular_name' => __('Termin', 'textdomain'),
            ),
            'public'        => true,
            'has_archive'   => true,
            'show_in_rest'  => true,
            'menu_icon'     => 'dashicons-calendar-alt',
            'supports'      => array('title', 'editor'),
            'taxonomies'    => array( 'resolution', 'topic', 'type' )
        )
    );
}