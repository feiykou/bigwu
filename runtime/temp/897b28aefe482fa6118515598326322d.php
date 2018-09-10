<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:72:"F:\phpStudy\WWW\bigwu\public/../application/home\view\index\contact.html";i:1536547258;}*/ ?>
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
	<style>
		.contact-mask{ position: fixed; left: 0; top: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,.6); display: none; opacity: 0;}
	</style>
</head>
<body>
<div class="container-fluid">
	<div class="header">
		<div class="container header-container clearfix">
			<div class="logo-wrap fl">
				<img src="/static/home/images/logo.png" alt="">
			</div>
		</div>
	</div>

	<div class="main">
		<div class="container contact-container font16">
			<dl class="tit-nav font20 clearfix">
				<dt class="fl"><h1>联系我们</h1></dt>
				<dd class="fl">Contact</dd>
			</dl>
			<ul class="share-wrap clearfix">
				<li class="weixin-wrap">
					<p><img class="share-icon" src="/static/home/images/weixin-icon.png" alt=""><span>@大误</span></p>
					<div class="weixin-img none"><img src="/static/home/images/weixin.jpg" alt=""><span></span></div>
				</li>
				<li>
					<a href="https://weibo.com/u/5157058480" target="_blank"><img class="share-icon" src="/static/home/images/weibo.png" alt=""><span>@大误官微</span></a>
				</li>
			</ul>
			<div class="address-wrap clearfix">
				<a href="#" target="_blank" class="fr map-wrap"><img src="/static/home/images/map.png" alt=""></a>
				<div class="address">
					<p>广东省广州市珠海区南天路51号9号楼</p>
					<p>Building 9，No. 51，Nantian Road，</p>
					<p>Haizhu District，Guangzhou，Guangdong，China</p>
				</div>
			</div>
			<div class="tel-wrap">
				<p>T：020-3860-8003</p>
				<p>E：dawumaoyi@163.com</p>
			</div>
		</div>

	</div>
</div>
<div class="contact-mask"></div>
<div class="phone-weixin-img none"><img src="/static/home/images/weixin.jpg" alt=""></div>
<script src="/static/home/js/zepto.js"></script>
<script src="/static/home/js/touch.js"></script>
<script src="/static/home/js/event.js"></script>
<script src="/static/home/js/fx.js"></script>
<script>
    $(function(){
        if(!IsPC()){
            $('.weixin-wrap').tap(function(){
                $('.contact-mask').css('display','block').animate({'opacity':1},300);
                $('.container-fluid').addClass('blur');
                $('.phone-weixin-img').show();
            });
            $(".contact-mask").tap(function(){
                $('.container-fluid').removeClass('blur');
                $(this).css({
                    'display':'none',
                    'opacity': 0
                });
                $('.phone-weixin-img').css({
                    'display':'none'
                });
            });
        }

        function IsPC() {
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            return flag;
        }
    });
</script>
</body>
</html>