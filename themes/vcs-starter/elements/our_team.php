<?php

if( $section = get_field('g_hps_our_amazing_team')):
$post_data =get_post(section[0]);



global $post;

$post = $post_data;

setup_postdata($post);


?>

<section class="team-section" id="team">
	<h2><?php the_title(); ?></h2>

	<?php wp_reset_postdata(); ?>

	<?php

$page = (get_query_var('paged')) ? get_query_var('paged') : 1;

$my_query = new WP_Query(array(
	'post_type' => 'Members',
	'posts_per_page' => -1,
	'orderby' => 'menu_order',
	'order' => 'DESC',
	'paged' => $page
));

if ( $my_query->have_posts() ) :

?>

<div class="team-container">

<?php $i = 1; while ($my_query->have_posts()) : 
$my_query->the_post(); ?>

	<div class="team-member">
	<?php the_post_thumbnail('full', array( 'class' =>'member-photo' )); ?>
		<div class="member-name"><?php the_title();?></div>
		<?php if ( $position = get_field('g_mp_position')): ?>

			<div class="position"><?php echo $position ?></div> <?php endif; ?>
		<?php if(have_rows('g_sn_network')): ?>
			<ul>
				<?php while (have_rows('g_sn_network')): the_row(); ?>
				<?php $icon = get_sub_field('g_sn_n_icon'); ?>
				<li><a href="<?php the_sub_field('g_sn_n_url'); ?>" target="_blank" class="<?php echo $icon; ?>"></a></li>
			<?php endwhile; ?>
			</ul>
	<?php endif; ?>
	<div class="pop">
<?php the_content(); ?>
	</div>
	<?php $i++; endwhile; ?>
	<?php wp_reset_postdata(); unset($my_query); endif; ?>
	</div>
</section>

<?php endif; ?>
