<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:70:"F:\phpStudy\WWW\bigwu\public/../application/home\view\index\index.html";i:1536547081;}*/ ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>首页 - 大误</title>
	<script src="/static/home/js/flexible.js"></script>
	<script src="/static/home/js/flexible_css.js"></script>
	<link rel="stylesheet" href="/static/home/css/public.css">
	<link rel="stylesheet" href="/static/home/css/style.css">
</head>
<body>
<div class="header">
	<div class="container header-container clearfix">
		<div class="logo-wrap fl">
			<img src="/static/home/images/logo.png" alt="">
		</div>
		<div class="header-nav fr font20">
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
		<div class="block-wrap font22">
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