<?php
function remove_comment_support()
{
    remove_post_type_support("post", "comments");
    remove_post_type_support("page", "comments");
}

function remove_admin_bar_render()
{
    global $wp_admin_bar;
    $wp_admin_bar->remove_menu("comments");
}
