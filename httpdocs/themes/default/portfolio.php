<!-- 	<ul id="portfolio" class="row">
		<li><a href=""><img src="http://placehold.it/236x488"></a></li>
		<li><a href=""><img src="http://placehold.it/488x236"></a></li>
		<li><a href=""><img src="http://placehold.it/236x236"></a></li>
		<li><a href=""><img src="http://placehold.it/236x488"></a></li>
		<li><a href=""><img src="http://placehold.it/236x236"></a></li>
		<li><a href=""><img src="http://placehold.it/236x488"></a></li>
		<li><a href=""><img src="http://placehold.it/236x236"></a></li>
		<li><a href=""><img src="http://placehold.it/488x236"></a></li>
		<li><a href=""><img src="http://placehold.it/236x236"></a></li>
		<li><a href=""><img src="http://placehold.it/236x488"></a></li>
		<li><a href=""><img src="http://placehold.it/236x236"></a></li>
		<li><a href=""><img src="http://placehold.it/236x236"></a></li>
		<li><a href=""><img src="http://placehold.it/236x236"></a></li>
		<li><a href=""><img src="http://placehold.it/236x488"></a></li>
		<li><a href=""><img src="http://placehold.it/236x236"></a></li>
		<li><a href=""><img src="http://placehold.it/236x488"></a></li>
		<li><a href=""><img src="http://placehold.it/236x236"></a></li>
		<li><a href=""><img src="http://placehold.it/236x236"></a></li>
		<li><a href=""><img src="http://placehold.it/488x236"></a></li>
	</ul> -->

	<ul id="portfolio" class="row">
		<?php if(has_posts()) : while (posts()) : ?>
		<li><a href="<?php echo article_custom_field('portfolio_image')?>"><img title="<?php echo article_html()?>" src="<?php echo article_custom_field('portfolio_thumbnail')?>"></a></li>			
		<?php endwhile; endif; ?>
	</ul>