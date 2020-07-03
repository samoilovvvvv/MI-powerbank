$(function(){

    let $window = $(window);
    let firstNav = $('#name_catalog').offset().top - $window.height();
    let secondNav = $('#howWork').offset().top - $window.height();

    $window.on('scroll', function(){
        if((firstNav) < $window.scrollTop()){
            $('#two').attr('class', 'mainnav');
            $('#one').attr('class', 'other');
        }

        if((secondNav) < $window.scrollTop()){
            $('#three').attr('class', 'mainnav');
            $('#two').attr('class', 'other');
        }

        if((secondNav) > $window.scrollTop()){
            $('#three').attr('class', 'other');
            $('#two').attr('class', 'mainnav');
        }

        if((firstNav) > $window.scrollTop()){
            $('#two').attr('class', 'other');
            $('#one').attr('class', 'mainnav');
        }
    });

    let firstNavScroll = $('#name_catalog').offset().top - $window.height() + 500;
    let secondNavScroll = $('#howWork').offset().top - $window.height() + 500;

    $('ul:eq(0) li').on('click', function(e){
        let target = e.target;
        let targetText = target.textContent;

        if($('#one').text() === targetText){
            $('html').animate({
                scrollTop: 0
            },500, 'swing');
        }

        if($('#two').text() === targetText){
            $('html').animate({
                scrollTop: firstNavScroll
            },500, 'swing');
        }

        if($('#three').text() === targetText){
            $('html').animate({
                scrollTop: secondNavScroll
            }, 500, 'swing');
        }
    });

    $('.order').on('click', function(){
        $('html').animate({
            scrollTop: 0
        }, 500, 'swing', function(){
            $('#overlay')
            .removeClass('hidden')
            .animate({
                opacity: 0.5,
                backgroundColor: '#000000'
            }, 300);
            
            $('#zakaz')
            .removeClass('hidden')
            .animate({
                opacity: 1
            }, 300);
    
            $('html').css({
                'overflow': 'hidden'
            });
    
            $('nav ul li').css("pointer-events", "none");
        });
    });

    $('#exit').on('click', function(){
        $('#overlay')
        .animate({
            opacity: 0
        }, 300);

        $('#zakaz')
        .animate({
            opacity: 0
        }, 300);
        
        setTimeout(function(){
            $('#overlay').addClass('hidden');
            $('#zakaz').addClass('hidden');
        }, 300);

        $('html').css({
            'overflow': 'auto'
        });

        $('nav ul li').css("pointer-events", "auto");
    });   

    $('.thumb').on('click', function(e){
        e.preventDefault();
        let newPic = $(this).parent().prev().children().eq(0);
        let src = $(this).attr('href');
        let indexBefore = $(this).closest('.list_img').find('.active').index();
        let indexNow = $(this).index();

        $(this).closest('.list_img').find('.active').removeClass('active');
        $(this).addClass('active');

        if(indexBefore < indexNow){
            newPic.animate({
                left: "-430px"
            }, 150, function(){
    
                newPic.attr('src', src);
                newPic.css({
                    "left": "430px"
                });
        
                newPic.animate({
                    left: "0px"
                }, 150);
            });
        }
        if(indexBefore > indexNow){
            newPic.animate({
                left: "430px"
            }, 150, function(){
    
                newPic.attr('src', src);
                newPic.css({
                    "left": "-430px"
                });
        
                newPic.animate({
                    left: "0px"
                }, 150);
            });
        }
    });

    $('.charact').on('click', function(e){
        if($(this).closest('.prod_s').css('height') === '859px'){
            $(this).closest('.prod_s').animate({
                height: '1089px'
            }, 300);
            $(this).closest('.prod_b').prev().slideDown(300);
        }else{
            $(this).closest('.prod_b').prev().slideUp(300);
            $(this).closest('.prod_s').animate({
                height: '859px'
            }, 300);
        }
    });

    $('#button_comment').on('click', function(){
        $('.comment_active').animate({
            left: '-600px'
        }, 150)
        .addClass('hidden');
        $('.test_comment:eq(0)').css({
            'left': '600px'
        });
        $('.test_comment:eq(0)').removeClass('hidden')
        .addClass('comment_active')
        .animate({
            left: '0px'
        });
    });
});