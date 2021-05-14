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
