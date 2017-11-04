<?php

/* Template Name: Services Page */

get_header();

?>

<?php 

// The number of all posts for a given query
$posts_found = $GLOBALS['wp_query']->found_posts;
// The number of posts for just the page
$posts_count = $GLOBALS['wp_query']->post_count;

if(have_posts()): ?>

	<?php while (have_posts()) : the_post(); ?>
	<div style="height:1000px;"></div>
		<?php the_title(); ?>
		<?php the_title();
		the_content();
		the_permalink(); ?>

	<?php endwhile; ?>
	

<?php endif; ?>

<?php get_footer(); ?>