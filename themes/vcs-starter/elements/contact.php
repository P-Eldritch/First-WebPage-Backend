<?php

$post_data = get_post( 102 );

global $post;

$post = $post_data;

setup_postdata($post);

?>


<section class="form-section" id="contact">
	<h2>Contact Us</h2>
	
	<div class="contact-text"><?php the_content(); ?></div>
	<?php wp_reset_postdata(); ?>
<?php echo do_shortcode('[contact-form-7 id="38" title="Contact Form" html_class="form-contact"]'); ?>

</section>