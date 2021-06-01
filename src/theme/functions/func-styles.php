<?php

function load_theme_styles()
{
    wp_enqueue_style("ljs-styles", get_stylesheet_uri());
}

function load_editor_styles()
{
    add_theme_support("editor-styles");
    add_editor_style("style.css");
}

function load_ljs_color_palette()
{
    add_theme_support("editor-color-palette", array(
        array(
            "name" => "grün",
            "slug" => "green",
            "color" => "#00FFC2",
        ),
        array(
            "name" => "schwarz",
            "slug" => "black",
            "color" => "#252525",
        ),
        array(
            "name" => "lila",
            "slug" => "purple",
            "color" => "#C9CEFF",
        ),
        array(
            "name" => "rot",
            "slug" => "red",
            "color" => "#E2190C",
        ),
        array(
            "name" => "weiß",
            "slug" => "white",
            "color" => "#fff",
        ),
    ));
}
