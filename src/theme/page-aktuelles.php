<?php
get_header();

if (have_posts()) :
	while (have_posts()) : the_post();
		the_content();
		?>
		<h1>Aktuelles Seite</h1>
		<?php
	endwhile;
endif;

get_footer();
