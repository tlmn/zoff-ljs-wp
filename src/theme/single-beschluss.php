<?php
get_header();

if (have_posts()) :
	while (have_posts()) : the_post();
?>
		<div class="beschluss-page post-type-beschluss">

		</div>
<?php
	endwhile;
endif;

get_footer();
