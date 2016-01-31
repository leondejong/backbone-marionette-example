<?php
	if(!function_exists('base')){
		function base($full = false) {
			return sprintf(
				'%s://%s%s',
				isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' ? 'https' : 'http',
				$_SERVER['HTTP_HOST'],
				$full ? $_SERVER['REQUEST_URI'] : preg_replace('/index.php/', '', $_SERVER['SCRIPT_NAME'])
			);
		}
	};
?><!DOCTYPE HTML>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<base href="<?php echo base(); ?>" />
		<meta name="title" content="showcase" />
		<meta name="description" content="showcase" />
		<meta name="keywords" content="javascript, backbone, marionette, example" />
		<meta name="author" content="" />
		<meta name="copyright" content="" />
		<meta name="publisher" content="" />
		<title>
			Showcase
		</title>
		<meta name="viewport" content="width=device-width" />
		<link rel="shortcut icon" href="./assets/graphics/icon512.png" />
		<link rel="stylesheet" type="text/css" href="./assets/css/style.css" media="screen" />
		<script data-main="./assets/js/application/configuration.js" src="./assets/js/library/requirejs/require.js"></script>
	</head>
	<body class="main">
		<div class="application"></div>
		<script src="./assets/js/custom/sprite.js"></script>
		<script src="./assets/js/custom/loader.js"></script>
	</body>
</html>