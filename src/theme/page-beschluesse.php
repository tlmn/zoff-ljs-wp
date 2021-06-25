<?php

$query = new WP_Query(array(
	'posts_per_page' => 5,
	'post_type' => 'beschluss',
));
get_header();
?>

<div class="container">
	<?php while ($query->have_posts()) : $query->the_post(); ?>
		<div>
			<h2><a href="<?php the_permalink(); ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
		</div>
	<?php endwhile; ?>
	<div class="nav-previous alignleft"><?php next_posts_link('Older posts'); ?></div>
	<div class="nav-next alignright"><?php previous_posts_link('Newer posts'); ?></div>
</div>
<?php
get_footer();
