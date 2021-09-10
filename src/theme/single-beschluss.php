<?php
get_header();

if (have_posts()):
    while (have_posts()):
        the_post(); ?>
		<div class="container grid-6 md:grid-12 my-6" id="single-beschluss">
			<div class="col-span-full lg:col-span-9 lg:col-start-2">
				<?php the_content(); ?>
			</div>
		</div>
<?php
    endwhile;
endif;

get_footer();
