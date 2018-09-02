<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:79:"D:\SoftDownload\wamp\www\bigwu\public/../application/home\view\index\index.html";i:1535880311;}*/ ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title></title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi">
    <link rel="stylesheet" href="/static/home/css/public.css">
	<link rel="stylesheet" href="/static/home/css/style.css">
</head>
<body>
	<div class="header">
		<div class="container header-container clearfix">
			<div class="logo-wrap fl">
				<img src="/static/home/images/logo.png" alt="">
			</div>
			<div class="header-nav fr">
				<ul class="clearfix">
					<li><a href="#">大误<span>About</span></a></li>
					<li><a href="#">产品<span>Work</span></a></li>
					<li><a href="#">联系<span>Contact</span></a></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="main">
		<div class="container index-container">
			<div class="block-wrap">
				<p>用合理的低价</p>
				<p>购买这样就好的产品</p>
			</div>
		</div>
	</div>

	<script src="/static/home/js/jquery.js"></script>
	<script>
		$(function(){
			$(window).resize(function(){
				getInitHeight();
			});
			getInitHeight();
			function getInitHeight(){
				var hh = $(window).height();
				var top = $('.header').height();
				var bh = hh - top;
				$(".main").css('height',bh);
			}
		});
	</script>
</body>
</html>
