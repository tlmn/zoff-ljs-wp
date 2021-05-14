<?php

/**
 * Plugin Name: LJS Blocks
 * Description: Gutenberg Blocks for Linksjugend ['solid]
 * Version: 1.0
 */

function ljs_blocks()
{
    $buildAssets = include (plugin_dir_path(__FILE__)) . 'index.asset.php';
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

add_filter('block_categories', 'ljs_block_category', 10, 2);
add_action('init', 'ljs_blocks');
