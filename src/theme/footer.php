<footer>
    <div class="container">
        <?php

        wp_nav_menu(array(
            'menu'                 => 'footer',
            'menu_class'           => 'menu footer_menu',
            'echo'                 => true,
            'fallback_cb'          => 'wp_page_menu',
            'theme_location'       => 'footer_menu',
        ));

        ?>
    </div>
</footer>
<?php wp_footer(); ?>
</body>

</html>