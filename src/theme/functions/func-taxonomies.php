<?php

function custom_taxonomy_buko()
{
	$labels = array(
		'name'                       => _x('Bundeskongresse', 'Taxonomy General Name', 'text_domain'),
		'singular_name'              => _x('Bundeskongress', 'Taxonomy Singular Name', 'text_domain'),
		'menu_name'                  => __('Bundeskongresse', 'text_domain'),
		'all_items'                  => __('Alle Bundeskongresse', 'text_domain'),
		'parent_item'                => __('Eltern-Element:', 'text_domain'),
		'parent_item_colon'          => __('Eltern-Element:', 'text_domain'),
		'new_item_name'              => __('Neuer Bundeskongress', 'text_domain'),
		'add_new_item'               => __('Bundeskongress hinzufügen', 'text_domain'),
		'edit_item'                  => __('Bundeskongress bearbeiten', 'text_domain'),
		'update_item'                => __('Bundeskongress aktualisieren', 'text_domain'),
		'view_item'                  => __('Bundeskongress anzeigen', 'text_domain'),
		'no_terms'                   => __('Keine Elemente', 'text_domain'),
		'items_list'                 => __('Liste von Elementen', 'text_domain'),
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_in_rest'      		 => true,
		'show_tagcloud'              => true,
	);
	register_taxonomy('congress', array('beschluss'), $args);
}

function custom_taxonomy_themen()
{

	$labels = array(
		'name'                       => _x('Themen', 'Taxonomy General Name', 'text_domain'),
		'singular_name'              => _x('Thema', 'Taxonomy Singular Name', 'text_domain'),
		'menu_name'                  => __('Themen', 'text_domain'),
		'all_items'                  => __('Alle Themen', 'text_domain'),
		'parent_item'                => __('Eltern-Element:', 'text_domain'),
		'parent_item_colon'          => __('Eltern-Element:', 'text_domain'),
		'new_item_name'              => __('Neues Thema', 'text_domain'),
		'add_new_item'               => __('Thema hinzufügen', 'text_domain'),
		'edit_item'                  => __('Thema bearbeiten', 'text_domain'),
		'update_item'                => __('Thema aktualisieren', 'text_domain'),
		'view_item'                  => __('Thema anzeigen', 'text_domain'),
		'no_terms'                   => __('Keine Elemente', 'text_domain'),
		'items_list'                 => __('Liste von Elementen', 'text_domain'),
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_in_rest'      		 => true,
		'show_tagcloud'              => true,
	);
	register_taxonomy('topics', array('beschluss'), $args);
}

function custom_taxonomy_terminart()
{

	$labels = array(
		'name'                       => _x('Terminarten', 'Taxonomy General Name', 'text_domain'),
		'singular_name'              => _x('Terminart', 'Taxonomy Singular Name', 'text_domain'),
		'menu_name'                  => __('Terminarten', 'text_domain'),
		'all_items'                  => __('Alle Terminarten', 'text_domain'),
		'parent_item'                => __('Eltern-Element:', 'text_domain'),
		'parent_item_colon'          => __('Eltern-Element:', 'text_domain'),
		'new_item_name'              => __('Neues Terminart', 'text_domain'),
		'add_new_item'               => __('Terminart hinzufügen', 'text_domain'),
		'edit_item'                  => __('Terminart bearbeiten', 'text_domain'),
		'update_item'                => __('Terminart aktualisieren', 'text_domain'),
		'view_item'                  => __('Terminart anzeigen', 'text_domain'),
		'no_terms'                   => __('Keine Elemente', 'text_domain'),
		'items_list'                 => __('Liste von Elementen', 'text_domain'),
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_in_rest'      		 => true,
		'show_tagcloud'              => true,
	);
	register_taxonomy('eventType', array('termin'), $args);
}
