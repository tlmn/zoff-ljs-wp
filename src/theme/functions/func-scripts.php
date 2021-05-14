<?php

function scripts_jquery()
{
    wp_enqueue_script("jquery");
}

function scripts_custom()
{
    wp_enqueue_script("js-file", get_template_directory_uri() . "/assets/js/scripts/common.js", false);
}
