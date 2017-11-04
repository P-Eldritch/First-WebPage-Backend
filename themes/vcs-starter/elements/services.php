<section class="features-section" id="features">

	<?php

	$post_data = get_post(70);
	global $post;
	$post = $post_data;

	setup_postdata($post);

	?>

	<h2><?php the_title(); ?></h2>
	<div class="features-text">
	<?php the_content(); ?>
	</div>


<?php if(have_rows('g_f_block') ): ?>
	<div class="features-articles">
<?php while ( have_rows('g_f_block') ) : the_row(); ?>
	<article>
		<h3 class="<?php the_sub_field('g_f_b_icon'); ?>"> <?php the_sub_field('g_f_b_heading'); ?></h3>
		<?php the_sub_field('g_f_b_content'); ?>
	</article>
<?php endwhile; ?>
		</div>

	<?php endif; ?>
			<?php wp_reset_postdata(); ?>
</section>