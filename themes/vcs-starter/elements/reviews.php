<section class="reviews-section" id="reviews">
<?php

	$post_data = get_post(119);
	global $post;
	$post = $post_data;

	setup_postdata($post);

	?>
	<h2><?php the_title(); ?></h2>

	<div class="slide-box">
		
	<div class="prev"></div>
	<div class="next"></div>

	<ul class="content">
<?php if(have_rows('g_r_block') ): ?>	
<?php while ( have_rows('g_r_block') ) : the_row(); ?>	
	<li class="reviews">
		<div class="quote"><?php the_sub_field('g_r_b_quote'); ?></div>
 <div class="author"><?php the_sub_field('g_r_b_author'); ?></div>
	</li>
<?php endwhile; ?>
	</ul>
	</div>
	<?php endif; ?>
	<?php wp_reset_postdata(); ?>
</section>