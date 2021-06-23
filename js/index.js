// window.addEventListener("load", ()=>{
    
// })
$(function() {
    $(".case_list li a").mouseenter(function() {
        $(this).addClass("current").parent().siblings().find("a").removeClass("current");
        var index = $(this).parent().index();
        $(".case_con .item").eq(index).show().siblings().hide();
    });


    // 轮播图
    var certifySwiper = new Swiper('#certify .swiper-container', {
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopedSlides: 5,
        autoplay: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
        	el: '.swiper-pagination',
        	//clickable :true,
        },
        on: {
            progress: function(progress) {
                
                for (i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i);
                    var slideProgress = this.slides[i].progress;
                    
                    modify = 1;
                    if (Math.abs(slideProgress) > 1) {
                        modify = (Math.abs(slideProgress) - 1) * 1.2 + 1;
                    }
                    
                    translate = slideProgress * modify * 150 + 'px';
                    
                    scale = 1 - Math.abs(slideProgress) / 5;
                    // console.log(scale)
                    zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                    slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                    slide.css('zIndex', zIndex);
                    slide.css('opacity', 1);
                    if (Math.abs(slideProgress) > 3) {
                        slide.css('opacity', 0);
                    }
                }
            },
            setTransition: function(transition) {
                for (var i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i)
                    slide.transition(transition);
                }
    
            }
        }
    
    })
});
