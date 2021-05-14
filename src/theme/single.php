<?php
get_header();

if (have_posts()) :
	while (have_posts()) : the_post();
?>
		<div class="container grid-6 md:grid-12">
			<div class="col-span-full">
				<?php
				the_content();
				?>
			</div>
		</div>
<?php
	endwhile;
endif;

get_footer();
