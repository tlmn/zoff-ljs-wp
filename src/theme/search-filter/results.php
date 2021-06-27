<?php

if (!defined('ABSPATH')) {
	exit;
}

if ($query->have_posts()) {
	$currentPage = $query->query['paged'];
	$maxPage = $query->max_num_pages;
?>

	Seite <?php echo $currentPage; ?> von <?php echo $maxPage; ?><br />

	<div class="pagination">
		<?php
		if ((int)$currentPage !== 1) {
		?>
			<a href="?sf_paged=<?php echo $currentPage - 1; ?>" class="wp-block-ljs-button bg-green text-black">Zurück</a>
		<?php
		}

		if ((int)$currentPage !== (int)$maxPage && (int)$maxPage !== 1) {
		?>
			<a href="?sf_paged=<?php echo $currentPage + 1; ?>" class="wp-block-ljs-button bg-green text-black">Weiter</a>
		<?php
		}
		?>
	</div>

	<?php
	while ($query->have_posts()) {
		$query->the_post();

	?>
		<div class="my-5">
			<h2 class="mb-3">
				<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
			</h2>
			<h3><?php the_date(); ?></h3>

			<p>
				<?php the_excerpt(); ?>
			</p>
		</div>

	<?php
	}
	?>
	Seite <?php echo $currentPage; ?> von <?php echo $maxPage; ?><br />

	<div class="pagination">
		<?php
		if ((int)$currentPage !== 1) {
		?>
			<a href="?sf_paged=<?php echo $currentPage - 1; ?>" class="wp-block-ljs-button bg-green text-black">Zurück</a>
		<?php
		}

		if ((int)$currentPage !== (int)$maxPage && (int)$maxPage !== 1) {
		?>
			<a href="?sf_paged=<?php echo $currentPage + 1; ?>" class="wp-block-ljs-button bg-green text-black">Weiter</a>
		<?php
		}
		?>
	</div>
<?php
} else {
	echo "No Results Found";
}
?>