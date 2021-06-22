<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title><?php wp_title('&ndash;', true, 'right'); ?></title>
	<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
	<link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri() . "/manifest/"; ?>apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri() . "/manifest/"; ?>favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri() . "/manifest/"; ?>favicon-16x16.png">
	<link rel="mask-icon" href="<?php echo get_template_directory_uri() . "/manifest/"; ?>safari-pinned-tab.svg" color="#5bbad5">
	<?php wp_head(); ?>
</head>

<body class="<?php print join(' ', get_body_class()); ?>'">

	<div class="hidden md:block bg-black relative z-50">
		<div class="container flex items-center">
			<div class="w-full flex justify-start">
				<a href="/" style="height: 2.5rem; width: 2.5rem; margin-bottom: -30px;" class="fill-green mr-5 animated duration-1000" id="header-logo">
					<?php
					echo file_get_contents(get_template_directory() . '/assets/images/icons/ljs-logo--white.svg');
					?>
				</a>
			</div>
			<div class="flex items-center">
				<?php

				wp_nav_menu(array(
					'menu'                 => 'primary_menu',
					'container'            => 'div',
					'container_class'      => '',
					'menu_class'           => 'menu primary_menu',
					'echo'                 => true,
					'fallback_cb'          => 'wp_page_menu',
					'theme_location'       => 'primary_menu',
					'depth'				   => 2
				));

				?>
				<div class="w-full flex justify-center items-center px-5 menu__search-icon">
					<a href="/suche" style="height: 1.5rem; width: 1.5rem;" class="fill-green">
						<?php
						echo file_get_contents(get_template_directory() . '/assets/images/icons/lens.svg');
						?>
					</a>
				</div>
				<?php

				wp_nav_menu(array(
					'menu'                 => 'top_menu',
					'container'            => 'div',
					'container_class'      => '',
					'menu_class'           => 'menu top_menu',
					'echo'                 => true,
					'fallback_cb'          => 'wp_page_menu',
					'theme_location'       => 'top_menu',
				));

				?>
			</div>
		</div>
	</div>

	<div class="hidden items-end flex-col justify-end md:hidden fixed top-0 left-0 h-screen h-max-screen w-screen w-max-screen z-50 overflow-scroll pb-8" id="mobile-menu">
		<div class="hidden flex-1 w-full" id="mobile-navigation">
			<div class="w-full py-5 flex justify-center">
				<a href="/" style="height: 2.5rem; width: 2.5rem;">
					<?php
					echo file_get_contents(get_template_directory() . '/assets/images/icons/ljs-logo--white.svg');
					?>
				</a>
			</div>
			<?php
			wp_nav_menu(array(
				'menu'                 => 'top_menu',
				'container'            => 'div',
				'container_class'      => 'w-full flex flex-col',
				'menu_class'           => 'menu top_menu',
				'echo'                 => true,
				'fallback_cb'          => 'wp_page_menu',
				'theme_location'       => 'top_menu',
			));

			wp_nav_menu(array(
				'menu'                 => 'primary_menu',
				'container'            => 'div',
				'container_class'      => 'w-full flex flex-col',
				'menu_class'           => 'menu primary_menu',
				'echo'                 => true,
				'fallback_cb'          => 'wp_page_menu',
				'theme_location'       => 'primary_menu',
				'depth'				   => 2

			));
			?>
			<div class="w-full py-5 flex justify-center">
				<a href="/suche" style="height: 2.5rem; width: 2.5rem;">
					<?php
					echo file_get_contents(get_template_directory() . '/assets/images/icons/lens.svg');
					?>
				</a>
			</div>
		</div>
	</div>
	<div class="block md:hidden fixed bottom-0 right-0 mr-2 mb-2 z-50">
		<button role="button" class="" onclick="toggleMenu()" id="button__menu--open">
			<?php
			echo file_get_contents(get_template_directory() . '/assets/images/icons/hamburger--open.svg');
			?>
		</button>
		<button role="button" class="hidden" onclick="toggleMenu()" id="button__menu--close">
			<?php
			echo file_get_contents(get_template_directory() . '/assets/images/icons/hamburger--close.svg');
			?>
		</button>
	</div>