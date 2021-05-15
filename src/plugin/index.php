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

    register_block_type('ljs/hero', array(
        'editor_script' => 'ljs-editor-script',
        'editor_style' => 'ljs-editor-style'
    ));
}

function ljs_block_category($categories, $post)
{
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'ljs',
                'title' => __('LJS Blocks', 'ljs'),
            ),
        )
    );
}

function expose_plugin_dir_url()
{
    wp_localize_script('ljs-editor-script', 'ljsBlocks', array('pluginURL' => plugin_dir_url(__FILE__)));
}

add_filter('block_categories', 'ljs_block_category', 10, 2);
add_action('init', 'ljs_blocks');
add_action('admin_init', 'expose_plugin_dir_url');
