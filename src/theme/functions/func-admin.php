<?php
function remove_posts_admin_menus()
{
    remove_menu_page("edit.php");
}

function remove_comments_admin_menus()
{
    remove_menu_page('edit-comments.php');
}
