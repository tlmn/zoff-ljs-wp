<?php

include("functions/func-custom-post-types.php");
include("functions/func-menus.php");
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
