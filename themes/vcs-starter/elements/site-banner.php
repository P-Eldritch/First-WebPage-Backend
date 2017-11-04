
<section class="header-section">
	<?php $bg = get_field('g_sb_image','option'); ?>
	<div class="background-image" style="background-image: url(<?php echo $bg; ?>)";> </div>
	<h2 class="header-title"><?php the_field('g_sb_description', 'option'); ?></p>		
	<h1><?php the_field('g_sb_title', 'option'); ?></h1>
	<div class="butt-div">
		<?php if( $post = get_field('g_sb_link', 'option') ): ?>
	<a class="header-button" href="#<?php echo $post ->post_name; ?>"><?php the_field('g_sb_link_more_text', 'option'); ?></a>
		<?php endif; ?>
	</div>
</section>


