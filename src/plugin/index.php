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

function ljs_render_latest_event($attributes)
{
    $colorTheme = !isset($attributes['colorTheme']) || $attributes['colorTheme'] === "" ? 'purple_red' : $attributes['colorTheme'];
    $colorThemes = [
        "black_green" => [
            "black",
            "green"
        ],
        "green_black" => [
            "green",
            "black"
        ],
        "purple_red" => [
            "purple",
            "red"
        ],
        "red_purple" => [
            "red",
            "purple"
        ],
        "black_red" => [
            "black",
            "red"
        ],
        "red_black" => [
            "red",
            "black"
        ]
    ];

    setlocale(LC_TIME, 'de_DE');

    $months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

    $query_args = array(
        'post_type'         => 'event',
        'post_status'       => 'publish',
        'posts_per_page'    => 1,
        'meta_key'          => 'time_startTime',
        'meta_compare'      => '>',
        'meta_value'        => date("Y-m-d H:i:s"),
        'orderby'           => 'meta_value',
        'order'             => 'ASC'
    );

    $query = new WP_Query($query_args);
    $posts = $query->posts;

    if (count($posts) > 0) {
        $post = $posts[0];
        $post_id = $post->ID;
        $time = strtotime(get_field('time', $post_id)['startTime']);
        $block = '
        <div class="wp-block-ljs-latest-event">
            <div class="col-span-full flex justify-center my-4">
                <h3 class="wp-block-ljs-latest-event__caption mb-5 box-shadow--5--' . $colorThemes[$colorTheme][1] . ' bg-' . $colorThemes[$colorTheme][0] . ' text-' . $colorThemes[$colorTheme][1] . '">
                    Nicht verpassen
                </h3>
            </div>
            <div class="col-span-full hidden md:flex justify-center md:col-span-2">
                <div class="fill--' . $colorThemes[$colorTheme][0] . '">
                ' . file_get_contents(plugin_dir_path(__FILE__) . 'svg/calendar.svg') . '
                </div>
            </div>
            <div class="col-span-full md:col-span-8">
                <span class="wp-block-ljs-latest-event__date"> ' . date("d. ", $time) . $months[date("n", $time) - 1] . date(" Y", $time) . '</span>
                <a href="' . get_permalink($post_id) . '" class="wp-block-ljs-latest-event__title">' . get_the_title($post_id) . '</a>
                <div class="wp-block-ljs-latest-event__body">' . substr(get_the_excerpt($post_id), 0, 200) . '...</div>
                <a href="' . get_permalink($post_id) . '" class="wp-block-ljs-button bg-' . $colorThemes[$colorTheme][0] . ' text-' . $colorThemes[$colorTheme][1] . '">mehr Infos</a>
            </div>
            <div class="col-span-full flex justify-center">
                <a href="/termine" class="wp-block-ljs-button bg-' . $colorThemes[$colorTheme][0] . ' text-' . $colorThemes[$colorTheme][1] . '">
                    Alle Termine >
                </a>
            </div>
        </div>';
        return $block;
    } else {
        return null;
    }
}

add_filter('block_categories', 'ljs_block_categories', 10, 2);
add_action('init', 'ljs_blocks');
add_action('admin_init', 'expose_plugin_dir_url');
