<?php

include("functions/func-acf.php");
include("functions/func-custom-post-types.php");
include("functions/func-comments.php");
include("functions/func-admin.php");
include("functions/func-menus.php");
include("functions/func-scripts.php");
include("functions/func-styles.php");
include("functions/func-taxonomies.php");

// ADD CUSTOM TAXONOMIES
add_action("init", "custom_taxonomy_buko", 0);
add_action("init", "custom_taxonomy_themen", 0);
add_action("init", "custom_taxonomy_terminart", 0);

// ADD CUSTOM POST TYPES
add_action("init", "custom_post_type_beschluss");
add_action("init", "custom_post_type_termin");

// REGISTER MENUS
add_action("after_setup_theme", "wp_register_menus", 0);

// LOAD STYLES
add_action("wp_enqueue_scripts", "load_theme_styles");
add_action("after_setup_theme", "load_editor_styles");
add_action("after_setup_theme", "load_ljs_color_palette")

// LOAD SCRIPTS
add_action("wp_enqueue_scripts", "scripts_jquery");
add_action("wp_enqueue_scripts", "scripts_custom");

// REMOVE COMMENTS SUPPORT
add_action("wp_before_admin_bar_render", "remove_admin_bar_render");
add_action("init", "remove_comment_support", 100);

// REMOVE UNEEDED ADMIN MENUS
add_action("admin_menu", "remove_comments_admin_menus");
add_action("admin_menu", "remove_posts_admin_menus");

// LOAD ACF FIELDS
add_action("init", "acf_register_json_fields");