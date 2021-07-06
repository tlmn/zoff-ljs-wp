<?php
get_header();

if (have_posts()) :
	while (have_posts()) : the_post();
		the_content();

?>
		<div class="container grid-12 py-8">
			<div class="col-span-full md:col-start-3 md:col-span-8">
				<?php
				echo do_shortcode('[searchandfilter slug="suche"]');
				echo do_shortcode('[searchandfilter slug="suche" show="results"]');
				?>
			</div>
		</div>
<?php
	endwhile;
endif;

get_footer();
