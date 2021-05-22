<?php

/**
 * Plugin Name: LJS Blocks
 * Plugin URI: 
 * Description: Gutenberg Blocks for Linksjugend ['solid]
 * Version: 1.0
 */

function ljs_blocks()
{
    $buildAssets = include (plugin_dir_path(__FILE__)) . 'index.asset.php';

    wp_register_script(
        'ljs-editor-script',
        plugins_url('index.js', __FILE__),
        array(
            'wp-editor',
            'wp-blocks',
            'wp-i18n',
            'wp-element',
        ),
        $buildAssets['version']
    );
    register_block_type('ljs/latest-event', array(
        'api_version' => 2,
        'render_callback' => 'ljs_render_latest_event',
        'editor_script' => 'ljs-editor-script',

    ));
}

function ljs_block_categories($categories)
{
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'ljs/layout',
                'title' => __('LJS Blöcke Layout'),
                'icon'  => 'layout'
            ),
            array(
                'slug' => 'ljs/text',
                'title' => __('LJS Blöcke Text'),
                'icon'  => 'text'
            ),
            array(
                'slug' => 'ljs/media',
                'title' => __('LJS Blöcke Medien'),
                'icon'  => 'admin-media'
            ),
        )
    );
}

function expose_plugin_dir_url()
{
    $pluginRelativePath = preg_replace('/^(?:\/\/|[^\/]+)*/', '', plugin_dir_url(__FILE__));
    wp_localize_script('ljs-editor-script', 'ljsBlocks', array('pluginURL' => $pluginRelativePath));
}

function ljs_render_latest_event()
{
    $query_args = array(
        'post_type' => 'event',
        'post_status' => 'publish',
        'posts_per_page' => 1,
        'orderby' => 'title',
    );

    $loop = new WP_Query($query_args);

    if (have_posts()) {
        $block = '<div class="wp-block-ljs-latest-event">';

        while ($loop->have_posts()) : $loop->the_post();
            $block .= get_the_title();
        endwhile;

        $block .= '</div>';
        return $block;
    } else {
        return null;
    }
}

add_filter('block_categories', 'ljs_block_categories', 10, 2);
add_action('init', 'ljs_blocks');
add_action('admin_init', 'expose_plugin_dir_url');
