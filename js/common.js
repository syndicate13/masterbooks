
/************************  Меню  ***********************/
(function($) {
    $(function() {
        $(".nav-icon").click(function () {
            if($(".nav-icon").hasClass("close_menu")){
                $('.nav-icon').addClass("active");
                $('.nav-icon').removeClass("close_menu");
                $(".main-nav").addClass("active");
                $("#overlay").addClass("active");
            }else{
                $('.nav-icon').removeClass("active");
                $('.nav-icon').addClass("close_menu");
                $(".main-nav").removeClass("active");
                $("#overlay").removeClass("active");
            }
        });
    })
})(jQuery);

/************************  Меню  ************************/


$( document).ready(function(  ) {
    

    // Закрытие меню
    $('#overlay').click(function(){
        $('.nav-icon').removeClass("active");
        $('.nav-icon').addClass("close_menu");
        $(".main-nav").removeClass("active");
        $(this).toggleClass('active');
    });

    //
    $('#about').readmore({ //вызов плагина
        speed: 350, //скорость анимации показать скрыть текст
        collapsedHeight: 670, //высота блока краткого текста в px
        moreLink: '<div class="more-c"><a class="more-3" href="#"><span>Читать далее</span></a></div>', //Ссылка на раскрытие блока
        lessLink: '<div class="more-c more-c--no-bg"><a  class="more-3" href="#"><span>Скрыть</span></a></div>' //Ссылка на скрытие блока
    });

    //Маска телефона
    $(".phone_input").inputmask("+7 (999) 999 - 99 - 99");

    // Селект
    $('.js-example-basic-single').select2();




    // Стрелка сортировки таблицы
    $('.table_sort').click(function() {
        $(this).removeAttr('href');
        $(this).toggleClass('active');
    });

    // Расширенная регистрация
    $('#navi').change(function() {
        $('.add_new_company').toggleClass('active');
    });








    /* Не пригодилось )

    $('.more_check').on('click', function(){
        $(this).removeAttr('href');
        $(this).toggleClass('active');
        var element = $(this).parent('.catalog_filter_container');
        if (element.hasClass('active')) {
            element.removeClass('active');
            element.find('.catalog_filter_container').removeClass('active');
            element.find('.catalog_filter_container').slideUp();
        }
        else {
            element.addClass('active');
            element.children('.catalog_filter_container').slideDown();

        }
    });

    $('.more_check').on('click', function(){
        $(this).removeAttr('href');
        var element = $(this).parent('.catalog_filter_container');
        if (element.hasClass('')) {
            element.removeClass('');
            element.find('.check').removeClass('open');
            element.find('.catalog_filter_container').slideUp();
        }
        else {
            element.addClass('active');
            element.children('.catalog_filter_container').slideDown();
            //element.siblings('li').children('ul').slideUp();
            //element.siblings('li').removeClass('open');
            //element.siblings('li').find('li').removeClass('open');
            //element.siblings('li').find('ul').slideUp();
        }
    });
    $('.loop').on('translate.owl.carousel', function(event) {
        $(this).find(".brand_list__link img").hide();
    });

    $('.loop').on('translated.owl.carousel', function(event) {
        $(this).find(".brand_list__link img").fadeIn(1500);
    });
    */
});

$(window).load(function(  ) {

    $(function() {
        $('.two_column').autocolumnlist_2({
            columns: 2,
            classname: 'col'
        });
        $('.good_card__characteristic .two_column').addClass('visible');
    });


    /*
    setTimeout(function () {
        $('.good_card__characteristic .two_column').addClass('visible');
    }, 500);
    */
});



$(function() {
    $('.scroll').perfectScrollbar();
});

$(window).on("load", function(){

    $('.fancybox').fancybox({
        padding: 0
    });


});