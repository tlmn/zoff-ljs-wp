<?php

function acf_json_load_point($paths)
{
    unset($paths[0]);
    $paths[] = get_stylesheet_directory() . "/assets/acf";
    return $paths;
}

?>
