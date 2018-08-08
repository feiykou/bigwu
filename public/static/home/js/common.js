$(window).resize(function(){
    calcNavW();
});

function calcNavW() {
    var maxW = $(".menu-inner-wrap").width();
    var $ulset = $(".nav-wrap").find('.r-list.set');
    console.log(maxW);
    var width = maxW <= $ulset.width() ? 'auto' : $ulset.width();
    $ulset.parent().css({
        'width': width
    });
}

var $navAll = $(".nav-all");
var $secli = $navAll.find('.second .set').children();
var $globalli = $navAll.find('.global>ul').children();
var $head_global = $(".inner-nav .nav-wrap").find('.setlists').children();

var page_init = {
    init: function(){
        this.setliHg($secli);
        this.setliHg($globalli);
    },

    setliHg: function($listDoms){
        var listArr = Array.prototype.slice.call($listDoms);
        var maxH = this.getMaxHeight(listArr);
        listArr.forEach(function(dom){
            $(dom).height(maxH);
        });

    },

    getMaxHeight: function(listArr){
        var heightArr = [];
        listArr.forEach(function (dom) {
            heightArr.push($(dom).height());
        });
        return Math.max.apply(null,heightArr);
    }
};

page_init.init();



function setMaxHeight($listDoms) {
    var listArr = Array.prototype.slice.call($listDoms);
    var heightArr = [];
    listArr.forEach(function (dom) {
        heightArr.push($(dom).height());
    });
    return Math.max.apply(null,heightArr);
}






// 导航动画
var FeiyLeft = function(opts){
    this.listDoms = opts.listDoms;
    this.dur = opts.dur || 40;
    this.trans = opts.trans;
    this.speed = opts.speed || 26;
    this.easing = opts.easing || 'easeOutQuad';
};


FeiyLeft.prototype = {
    fadeIn: function(){
        var $listDoms = this.listDoms;
        var that = this;
        var len = $listDoms.length;
        for (var i = 0; i < len; i++) {
            (function(i){
                var $listDom = $listDoms.eq(i);
                $listDom.addClass("animate_trans");
                var express = that.speed/len*(i+1)*10+6;
                $listDom.stop(true).delay(express).animate({
                    'opacity': 1
                },{
                    easing: that.easing,
                    duration: that.dur,
                    step: function(now,fx){
                        $listDom.css({transform: 'translateY('+(1-now)*that.trans+'px)'});
                    }
                });
            })(i);
        };
    },
    fadeOut: function(){
        var $listDoms = this.listDoms;
        var that = this;
        var len = $listDoms.length;
        for (var i = 0; i < len; i++) {
            $listDoms.eq(i).removeClass("animate_trans");
            $listDoms.eq(i).css({'transform':'translateY('+that.trans+'px)'});
            $listDoms.eq(i).stop(true,true).animate({
                'opacity': '0'
            },0);
        };
    }
};






console.log(setMaxHeight($secli));
var head_global = new FeiyLeft({
    listDoms: $head_global,
    speed: 26,
    dur: 260,
    trans: 10
});
var secli = new FeiyLeft({
    listDoms: $secli,
    speed: 38,
    dur:10,
    trans: 15
});
var globalli = new FeiyLeft({
    listDoms: $globalli,
    speed: 26,
    dur: 160,
    trans: 15
});

setTimeout(function(){
    head_global.fadeIn();
},1000);


$(".btn-menu").on('click',function(){
    if(!$(this).hasClass('close')){
        $(this).addClass("close");
        $navAll.css({
            'pointerEvents': 'auto',
            'visibility': 'visible'
        }).stop(true,true).animate({
            'opacity': 1
        },{
            duration: 200,
            easing:'easeInOutSine'
        });

        head_global.fadeOut();
        secli.fadeIn();
        globalli.fadeIn();

    }else{
        $(this).removeClass("close");
        $navAll.stop(true,true).animate({
            'opacity': 0,
        },{
            duration: 300,
            easing:'easeInQuint',
            complete: function(){
                $(this).css({
                    'pointerEvents': 'none',
                    'visibility': 'hidden'
                })
            }
        });
        secli.fadeOut();
        globalli.fadeOut();
        head_global.fadeIn();
    }
});
