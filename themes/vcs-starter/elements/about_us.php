<section class="about-section" id="about">
	<?php

	$post_data = get_post(63);
	global $post;
	$post = $post_data;

	setup_postdata($post);


?>


	<h2><?php the_title(); ?></h2>
	<p> <?php the_content(); ?></p>
	<?php if(have_rows('g_au_block') ): ?>
	<?php while ( have_rows('g_au_block') ) : the_row(); ?>
	<div class="img-wrapper"><div class="history-photo" style="background-image: url(<?php echo the_sub_field('g_au_block_image');  ?>)";> </div><h4><?php the_sub_field('g_au_block_heading'); ?></h4><?php the_sub_field('g_au_block_content'); ?></div>

	<?php endwhile; ?>
	<?php endif; ?>
	<?php wp_reset_postdata(); ?>

</section>