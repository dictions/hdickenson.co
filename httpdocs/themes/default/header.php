<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title><?php echo site_name(); ?></title>
	<meta name="description" content="">
	<meta name="keywords" content="">

	<!--Styles-->
	<link rel="stylesheet" type="text/css" href="<?php echo theme_url('lib/reset-css/reset.css')?>">
	<link rel="stylesheet" type="text/css" href="<?php echo theme_url('styles/css/main.css')?>">

	<!--Above the Fold-->
	<!--Fonts-->
	<script type="text/javascript">
	WebFontConfig = {
		google: { families: [ 'Raleway:800,900:latin', 'Lato:400,700,400italic,700italic:latin' ] }
	};
	(function() {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	})(); 
	</script>
	<!--Above the fold styles-->
	<style type="text/css">
	</style>
</head>
<body class="hide">
	<!--[if lt IE 11]>
		<p class="browsehappy">Aw shucks! You should probably <a href="http://browsehappy.com/">upgrade your browser.</a></p>
	<![endif]-->