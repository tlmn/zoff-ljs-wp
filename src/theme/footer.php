<footer>
    <div class="container flex items-center justify-between">
        <?php

        wp_nav_menu(array(
            'menu'                 => 'footer',
            'menu_class'           => 'menu footer_menu',
            'echo'                 => true,
            'fallback_cb'          => 'wp_page_menu',
            'theme_location'       => 'footer_menu',
        ));

        ?>

        <a href="/" style="height: 1.5rem; width: 1.5rem;" class="fill-green animated">
            <?php
            echo file_get_contents(get_template_directory() . '/assets/images/icons/ljs-logo--white.svg');
            ?>
        </a>
    </div>
</footer>
<?php wp_footer(); ?>
</body>

</html>