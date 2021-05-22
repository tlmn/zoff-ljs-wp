<?php
get_header();

if (have_posts()) :
	while (have_posts()) : the_post();
?>
		<div class="container grid-6 md:grid-12 py-7">
			<div class="col-span-full md:col-span-8 md:col-start-3">
				<h1><?php the_title(); ?></h1>
			</div>
			<div class="col-span-full md:col-span-8 md:col-start-3">
				<?php
				the_content();
				?>
			</div>
		</div>
<?php
	endwhile;
endif;

get_footer();
