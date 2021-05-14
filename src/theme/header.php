<?php
global $post, $themeColor;
if (get_field('themeColor', $post->ID)) {
	$themeColor = get_field('themeColor', $post->ID);
} else {
	$themeColor = 'red';
}
?>

<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title><?php wp_title('&ndash;', true, 'right'); ?></title>
	<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
	<link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri() . "/assets/images/favicons/"; ?>apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri() . "/assets/images/favicons/"; ?>favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri() . "/assets/images/favicons/"; ?>favicon-16x16.png">
	<link rel="manifest" href="<?php echo get_template_directory_uri() . "/assets/images/favicons/"; ?>site.webmanifest">
	<link rel="mask-icon" href="<?php echo get_template_directory_uri() . "/assets/images/favicons/"; ?>safari-pinned-tab.svg" color="#5bbad5">
	<?php wp_head(); ?>
</head>

<body class="<?php print join(' ', get_body_class()); ?>'">

	<div class="header">
		<a class="text-white sm:text-<?php if ($themeColor === 'white') { ?>red<?php } else { print $themeColor; } ?> text-6xl font-bold z-50" href="<?php echo get_home_url(); ?>" id="zoff-link">zoff</a>
		<div class="absolute w-full h-full z-40" id="hamburger-wrapper">
			<div class="w-full h-full absolute top-0 flex justify-center items-center">
				<a class="hidden text-white text-6xl font-bold z-50" id="menu-start" href="<?php echo get_home_url(); ?>">Start</a>
			</div>
			<div class="w-full h-full absolute top-0 flex justify-end items-center / pr-2">
				<button class="hamburger hamburger--squeeze hamburger--<?php if ($themeColor === 'white') { ?>red<?php } else { print $themeColor; } ?>" type="button" id="hamburger">
					<span class="hamburger-box">
						<span class="hamburger-inner"></span>
					</span>
				</button>
			</div>
		</div>
		<div class="w-screen h-screen bg-<?php if ($themeColor === 'white') { ?>red<?php } else { print $themeColor; } ?> hidden fixed z-40 top-0 justify-center items-center transition-all duration-200 ease-in-out" id="menu-overlay">
			<?php wp_nav_menu(array('theme_location' => 'menu-navigation')); ?>
		</div>
	</div>
	<div class="menu-shadow hidden sm:block"></div>