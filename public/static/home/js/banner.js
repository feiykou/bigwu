

var bannerJson = {
    prevIndex: 0,
    index: 0,
    timer: null,
    curTime: 1,
    whjson: {},
    len: 0,
    default: {
        setTime: 5000,
        animate: 'originX',
        animate_time: 8000,
        switch_time: 800
    },
    entry: function(obj){
        var opts = $.extend({},this.default,obj);
        this.init(opts);
    },
    init: function(opts){
        this.curTime = new Date();
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
        this.mobileEvent(opts,$banner,$blis,$dot_wrap);
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
            if(top<=0){
                height = H;
                var imgw = dwidth/dheight*height;
                right = (imgw - ww) / 2;
                ww = imgw;
                top= 0;
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
        var top = $dom.parent().css('paddingTop').replace('px','');
        console.log(top);
        var bh = hh - top;
        $dom.css({
            width: ww,
            height: bh
        });
        return {
            w: ww,
            h: bh
        }
    },
    critiIndex: function() {
        if (this.index >= this.len) this.index = 0;
        if (this.index < 0) this.index = this.len - 1;
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
        that.critiIndex();
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
    timePrevent: function(time){
        if((new Date() - time)< 500){
            return false;
        };
        return new Date();
    },
    mobileEvent: function(opts,$banner,$blis,$dot_wrap){
        var that = this;

        $banner[0].ontouchstart = function(e){
            var resultTime = that.timePrevent(that.curTime);
            if(!resultTime){
                return false;
            }
            that.curTime = resultTime;
            clearInterval(that.timer);
            var sX = e.changedTouches[0].pageX;
            this.ontouchmove = function(e){
                var nX = e.changedTouches[0].pageX;
            };

            this.ontouchend = function(e){
                this.ontouchmove = null;
                this.ontouchend = null;
                var eX = e.changedTouches[0].pageX;
                if(eX-sX > 30){
                    that.index --;
                }else if(eX - sX < -30){
                    that.index ++;
                }
                that.auto(opts,$blis,$dot_wrap);
                that.setIn(opts,$blis,$dot_wrap);
            };
        };


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
            that.critiIndex();
            // that.index = that.index>=that.len?0:that.index;
            that.auto(opts,$blis,$dot_wrap);
        },opts.setTime);
    }
};
