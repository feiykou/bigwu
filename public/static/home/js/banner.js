

var bannerJson = {
    prevIndex: 0,
    index: 0,
    timer: null,
    whjson: {},
    len: 0,
    default: {
        setTime: 5000,
        animate: 'originX',
        animate_time: 10000,
        switch_time: 600
    },
    entry: function(obj){
        var opts = $.extend({},this.default,obj);
        this.init(opts);
    },
    init: function(opts){
        var $banner = $(".bw-banner");
        var $blis = $banner.find("li");
        var $dot_wrap = $banner.find(".dot-wrap");
        this.len = $blis.length;
        this.whjson = this.calcbannerWH($banner);
        this.sizeImg($blis,this.whjson.w,this.whjson.h);
        this.onresize($banner,$blis);
        this.initRun(opts,$blis,$dot_wrap);
        this.eventFn().dotClick(opts,$blis,$dot_wrap);
        this.eventFn().stopDot(opts,$blis,$dot_wrap);
    },
    sizeImg: function($lisDom,W,H){
        // console.log(`W=${W}`);
        var liArr = Array.prototype.slice.call($lisDom);
        liArr.forEach(function(dom){
            var ww = W;
            var dwidth = $(dom).find('img').data('width');
            var dheight = $(dom).find('img').data('height');
            var height = dheight/dwidth*ww;
            var top = (height - H) / 2;
            var right = 0;
            // console.log(`top=${top}`);
            if(top<=0){
                height = H;
                var imgw = dwidth/dheight*height;
                right = (imgw - ww) / 2;
                console.log(`W=${ww}`);
                ww = imgw;
                top= 0;

                // console.log(`imgw=${imgw}`);
                console.log(`right=${right}`);
            }
            $(dom).find("img").css({
                "width": ww,
                "height": height,
                "top": -top,
                "right": -right+"px"
            });
        });
    },
    calcbannerWH: function($dom){
        var hh = $(window).height();
        var ww = $(window).width();
        var bh = hh - 192;
        $dom.css({
            width: ww,
            height: bh
        });
        return {
            w: ww,
            h: bh
        }
    },
    onresize: function($banner,$blis){
        var that = this;
        $(window).resize(function(){
            that.whjson = that.calcbannerWH($banner);
            that.sizeImg($blis,that.whjson.w,that.whjson.h);
            $blis.eq(that.prevIndex).width(that.whjson.w);
        });
    },
    auto: function(opts,$blis,$dot_wrap){
        var that = this;
        $dot_wrap.find("span").eq(that.index).addClass("active").siblings().removeClass("active");
        $blis.eq(that.index).css({
            "zIndex": 3
        }).animate({
            "width": that.whjson.w
        },{
            duration: opts.switch_time,
            easing:'easeInQuint',
            complete: function(){
                $blis.eq(that.prevIndex).find('img').stop(true,true).animate(that.animte[opts.animate]['start'],0);
                $blis.eq(that.prevIndex).css({
                    'width': 0,
                    'left': 'auto',
                    'right': 0,
                    'zIndex': 2
                });
                $(this).find('img').stop(true,true).animate(that.animte[opts.animate]['end'],opts.animate_time);
                $(this).css('zIndex',2);
                that.prevIndex = that.index;
            }
        });
    },
    eventFn: function(){
        var that = this;
        return {
            dotClick: function(opts,$blis,$dot_wrap){
                $dot_wrap.find("span").on('click',function(){
                    that.index = $(this).index();
                    if(that.index == that.prevIndex) return false;
                    that.auto(opts,$blis,$dot_wrap);
                });
            },
            stopDot: function(opts,$blis,$dot_wrap){
                $dot_wrap.find("span").hover(function(){
                    clearInterval(that.timer);
                },function(){
                    that.setIn(opts,$blis,$dot_wrap);
                });
            }
        }
    },
    animte: {
        originX: {
            start:{
               transformOriginX: '0%'
            },
            end: {
                transformOriginX:'100%'
            }
        },
        scale: {
            start: {
                scale: "1"
            },
            end: {
                scale: "1.1"
            }
        }
    },
    initRun: function(opts,$blis,$dot_wrap){
        var that = this;
        $blis.eq(0).find('img').stop(true).animate(that.animte[opts.animate]['end'],opts.animate_time);
        that.setIn(opts,$blis,$dot_wrap);
    },

    setIn: function(opts,$blis,$dot_wrap){
        var that = this;
        that.timer = setInterval(function(){
            that.index++;
            that.index = that.index>=that.len?0:that.index;
            that.auto(opts,$blis,$dot_wrap);
        },opts.setTime);
    }
};
