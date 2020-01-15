
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


    /*   Анимация выбора размеров в карточке товара             */
    $('.size_list a').click(function(){
        $('.size_list a').removeClass('active');
        $(this).toggleClass('active');
    });


    /*   Анимация сортировок             */
    $('#sort_2.catalog_sort__list > li > a').click(function(){
        $('#sort_2.catalog_sort__list > li > a').removeClass('active');
        $(this).toggleClass('active');
    });

    $('#sort_2.catalog_sort__list_2 > li > a').click(function(){
        $('#sort_2.catalog_sort__list_2 > li > a').removeClass('active');
        $(this).toggleClass('active');
    });

    $('#sort_1.catalog_sort__list_2 > li').click(function(){
        $('#sort_1.catalog_sort__list_2 > li').removeClass('active');
        $(this).toggleClass('active');
    });

    $('#sort_1.catalog_sort__list_2 > li > a').click(function(){
        $('#sort_1.catalog_sort__list_2 > li > a').removeClass('active');
        $(this).toggleClass('active');
    });

    $('.fav').click(function(){
        $(this).removeAttr('href');
        $(this).toggleClass('active');
    });

    $('.catalog_sort__list_2__slide li a').click(function(){
        $('.catalog_sort__list_2__slide a').removeClass('active');
        $(this).toggleClass('active');
    });
    /*   Анимация сортировок             */


    // Фабрикатор, создание новой витрины
    $('.products__content').readmore({ //вызов плагина
        speed: 350, //скорость анимации показать скрыть текст
        collapsedHeight: 270, //высота блока краткого текста в px
        moreLink: '<a class="more_check" href="#"><span>Смотреть еще<span class="show_numbers"></span></span></a>', //Ссылка на раскрытие блока
        lessLink: '<a  class="more_check" href="#"><span>Скрыть</span></a>' //Ссылка на скрытие блока
    });
    // Показ таблицу брендов
    $('.where_can_buy__table').readmore({ //вызов плагина
        speed: 350, //скорость анимации показать скрыть текст
        collapsedHeight: 111, //высота блока краткого текста в px
        moreLink: '<a class="more_check" href="#"><span>Смотреть все<span class="show_numbers"></span></span></a>', //Ссылка на раскрытие блока
        lessLink: '<a  class="more_check" href="#"><span>Скрыть</span></a>' //Ссылка на скрытие блока
    });

    // Показ списка чекбоксов в фильтре каталога
    $('.catalog_filter_container').readmore({ //вызов плагина
        speed: 350, //скорость анимации показать скрыть текст
        collapsedHeight: 98, //высота блока краткого текста в px
        moreLink: '<a class="more_check" href="#"><span>Смотреть еще<span class="show_numbers"></span></span></a>', //Ссылка на раскрытие блока
        lessLink: '<a  class="more_check" href="#"><span>Скрыть</span></a>' //Ссылка на скрытие блока
    });

    // Показ брендов в торговом центре
    $('.show_brand').readmore({ //вызов плагина
        speed: 350, //скорость анимации показать скрыть текст
        collapsedHeight: 82, //высота блока краткого текста в px
        moreLink: '<a class="show_brand_btn" href="#"><span>Смотреть еще</span></a>', //Ссылка на раскрытие блока
        lessLink: '<a  class="show_brand_btn" href="#"><span>Скрыть</span></a>' //Ссылка на скрытие блока
    });

    // Показ доболнительных фильтров каталога
    $('.show_more_filter').click(function(){
        $(this).removeAttr('href');
        $('.hidden_filter').toggleClass('active');
        $(this).toggleClass('active');
    });

    // Карточка продавца показать весь текст
    $('.modal_card_manufacture__text__inner').readmore({ //вызов плагина
        speed: 350, //скорость анимации показать скрыть текст
        collapsedHeight: 180, //высота блока краткого текста в px
        moreLink: '<a class="view_all_text" href="#">Далее</a>', //Ссылка на раскрытие блока
        lessLink: '<a  class="view_all_text" href="#">Скрыть</a>' //Ссылка на скрытие блока
    });


    // Показать Торговые центры
    $('.whoseler_fabric_list').readmore({ //вызов плагина
        speed: 350, //скорость анимации показать скрыть текст
        collapsedHeight: 35, //высота блока краткого текста в px
        moreLink: '<a class="view_all_text" href="#">Еще</a>', //Ссылка на раскрытие блока
        lessLink: '<a  class="view_all_text" href="#">Скрыть</a>' //Ссылка на скрытие блока
    });
    // Показать Торговые центры
    $('.col_4_wfbt__mall').readmore({ //вызов плагина
        speed: 350, //скорость анимации показать скрыть текст
        collapsedHeight: 40, //высота блока краткого текста в px
        moreLink: '<a class="view_all_text" href="#">Смотреть еще</a>', //Ссылка на раскрытие блока
        lessLink: '<a  class="view_all_text" href="#">Скрыть</a>' //Ссылка на скрытие блока
    });
    // Показать таблицу 1 в товарах
    $('.availability__table').readmore({ //вызов плагина
        speed: 350, //скорость анимации показать скрыть текст
        collapsedHeight: 105, //высота блока краткого текста в px
        moreLink: '<a class="more_filter_btn" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.68 8.39"><g><path d="M200,193.21a1.06,1.06,0,0,1-.75-0.31L193,186.63a1.06,1.06,0,0,1,1.5-1.5l6.26,6.26A1.06,1.06,0,0,1,200,193.21Z" transform="translate(-192.67 -184.82)"/><path d="M200,193.21a1.06,1.06,0,0,1-.75-1.82l6.29-6.26a1.06,1.06,0,0,1,1.5,1.51l-6.29,6.26A1.06,1.06,0,0,1,200,193.21Z" transform="translate(-192.67 -184.82)"/></g></svg> Смотреть все</a>', //Ссылка на раскрытие блока
        lessLink: '<a  class="more_filter_btn active" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.68 8.39"><g><path d="M200,193.21a1.06,1.06,0,0,1-.75-0.31L193,186.63a1.06,1.06,0,0,1,1.5-1.5l6.26,6.26A1.06,1.06,0,0,1,200,193.21Z" transform="translate(-192.67 -184.82)"/><path d="M200,193.21a1.06,1.06,0,0,1-.75-1.82l6.29-6.26a1.06,1.06,0,0,1,1.5,1.51l-6.29,6.26A1.06,1.06,0,0,1,200,193.21Z" transform="translate(-192.67 -184.82)"/></g></svg> Скрыть</a>' //Ссылка на скрытие блока
    });
    $('.delivery__table').readmore({ //вызов плагина
        speed: 350, //скорость анимации показать скрыть текст
        collapsedHeight: 105, //высота блока краткого текста в px
        moreLink: '<a class="more_filter_btn" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.68 8.39"><g><path d="M200,193.21a1.06,1.06,0,0,1-.75-0.31L193,186.63a1.06,1.06,0,0,1,1.5-1.5l6.26,6.26A1.06,1.06,0,0,1,200,193.21Z" transform="translate(-192.67 -184.82)"/><path d="M200,193.21a1.06,1.06,0,0,1-.75-1.82l6.29-6.26a1.06,1.06,0,0,1,1.5,1.51l-6.29,6.26A1.06,1.06,0,0,1,200,193.21Z" transform="translate(-192.67 -184.82)"/></g></svg> Смотреть все</a>', //Ссылка на раскрытие блока
        lessLink: '<a  class="more_filter_btn active" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.68 8.39"><g><path d="M200,193.21a1.06,1.06,0,0,1-.75-0.31L193,186.63a1.06,1.06,0,0,1,1.5-1.5l6.26,6.26A1.06,1.06,0,0,1,200,193.21Z" transform="translate(-192.67 -184.82)"/><path d="M200,193.21a1.06,1.06,0,0,1-.75-1.82l6.29-6.26a1.06,1.06,0,0,1,1.5,1.51l-6.29,6.26A1.06,1.06,0,0,1,200,193.21Z" transform="translate(-192.67 -184.82)"/></g></svg> Скрыть</a>' //Ссылка на скрытие блока
    });

    // ЛК корзина показ деталей
    $('.table_detail_cart').readmore({ //вызов плагина
        speed: 350, //скорость анимации показать скрыть текст
        collapsedHeight: 0, //высота блока краткого текста в px
        moreLink: '<a class="cart_show disabled" href="#">Развернуть</a>', //Ссылка на раскрытие блока
        lessLink: '<a class="cart_show active" href="#">Свернуть</a>' //Ссылка на скрытие блока
    });

    $('.show_all_order').on('click', function(){
        $(this).removeAttr('href');
        $(this).toggleClass('active');
        var element = $(this).parent('.history_order__col_1');
        if (element.hasClass('active')) {
            element.removeClass('active');
            element.find('.history_order__col_1').removeClass('active');
            element.find('.history_order__col_1').slideUp();
        }
        else {
            element.addClass('active');
            element.children('.history_order__col_1').slideDown();

        }
    });

    $('.show_table_2').on('click', function(){
        $(this).removeAttr('href');
        $(this).toggleClass('active');
        var element = $(this).parent('.col_4_st2');
        if (element.hasClass('active')) {
            element.removeClass('active');
            element.find('.col_4_st2').removeClass('active');
            element.find('.col_4_st2').slideUp();
        }
        else {
            element.addClass('active');
            element.children('.col_4_st2').slideDown();

        }
    });

    // расчет высоты подсказки
    $(".status_info__dropdown").height(function(i,val){
        return val;
    });

    //Чекбоксы - активация
    var checkbox = $(".checkbox"),
        boxCnt = checkbox.length,
        allcheckbox = $("#check_all");
    allcheckbox.on('change', function () {
        checkbox.prop("checked", $(this).is(":checked"));
    });
    checkbox.on('change', function () {
        allcheckbox.prop("checked", $('.checkbox:checked').length == boxCnt);
    });

    var checkbox_2 = $(".checkbox_2"),
        boxCnt = checkbox_2.length,
        allcheckbox = $("#check_all_2");
    allcheckbox.on('change', function () {
        checkbox_2.prop("checked", $(this).is(":checked"));
    });
    checkbox_2.on('change', function () {
        allcheckbox.prop("checked", $('.checkbox_2:checked').length == boxCnt);
    });

    var checkbox_3 = $(".checkbox_3"),
        boxCnt = checkbox_3.length,
        allcheckbox = $("#check_all_3");
    allcheckbox.on('change', function () {
        checkbox_3.prop("checked", $(this).is(":checked"));
    });
    checkbox_3.on('change', function () {
        allcheckbox.prop("checked", $('.checkbox_3:checked').length == boxCnt);
    });

    var checkbox_4 = $(".checkbox_4"),
        boxCnt = checkbox_4.length,
        allcheckbox = $("#check_all_4");
    allcheckbox.on('change', function () {
        checkbox_4.prop("checked", $(this).is(":checked"));
    });
    checkbox_4.on('change', function () {
        allcheckbox.prop("checked", $('.checkbox_4:checked').length == boxCnt);
    });

    //Чекбоксы - активация

    //плюс - минус
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    //Маска телефона
    $(".phone_input").inputmask("+7 (999) 999 - 99 - 99");

    // Селект
    $('.js-example-basic-single').select2();

    // Второй уровень меню
    $('.main_menu__dropdown li.has-sub .arrow_menu').on('click', function(){
        //$(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });


    // Стрелка сортировки таблицы
    $('.table_sort').click(function() {
        $(this).removeAttr('href');
        $(this).toggleClass('active');
    });

    // Расширенная регистрация
    $('#navi').change(function() {
        $('.add_new_company').toggleClass('active');
    });

    // Главный слайдер
    $('.main_slider').owlCarousel({
        //center: true,
        //autoHeight: true,
        items:1,
        loop:true,
        margin:0,
        nav: true,
        autoplay: true,
        animateOut: 'fadeOut',
        autoplaySpeed: 900,
        autoplayTimeout: 5000,
        responsive:{
            901:{
                items:1
            },
            768:{
                items:1
            },
            300:{
                items:1
            }
        }
    });

    // Карусель на главной
    $('.loop').owlCarousel({
        //center: true,
        items:5,
        loop:true,
        autoplay:false,
        mouseDrag: true,
        nav: false,
        dots: false,
        touchDrag: false,
        margin:20,
        responsive:{
            600:{
                items:5,
                slideBy:5
            }
        }
    });

    // Карусель на главной
    $('.loop_2').owlCarousel({
        //center: true,
        items:5,
        loop:true,
        autoplay:false,
        mouseDrag: true,
        nav: true,
        dots: false,
        touchDrag: false,
        margin:15,
        responsive:{
            600:{
                items:5,

            }
        }
    });

    // Слайдер товара

    $( '#example5' ).sliderPro({
        width: 620,
        height: 720,
        autoplay: false,
        orientation: 'horizontal',
        loop: false,
        arrows: false,
        buttons: false,
        thumbnailsPosition: 'bottom',
        thumbnailPointer: true,
        thumbnailWidth: 138,
        thumbnailHeight: 170,
        breakpoints: {
            1230: {
                /*
                thumbnailsPosition: 'bottom',
                orientation: 'horizontal',
                thumbnailWidth: 68,
                width: 308,
                height: 510,
                thumbnailHeight: 105
                */
            },
            920: {
                /*
                thumbnailsPosition: 'bottom',
                orientation: 'horizontal',
                width: 580,
                height: 540,
                thumbnailWidth: 68,
                thumbnailHeight: 105
                */
            }
        }
    });

    // Слайдер модалка

    $( '#example6' ).sliderPro({
        width: 860,
        height: 550,
        autoplay: false,
        orientation: 'horizontal',
        loop: false,
        arrows: false,
        buttons: false,
        thumbnailsPosition: 'bottom',
        thumbnailPointer: true,
        thumbnailWidth: 170,
        thumbnailHeight: 170,
        breakpoints: {
            1230: {
                /*
                thumbnailsPosition: 'bottom',
                orientation: 'horizontal',
                thumbnailWidth: 68,
                width: 308,
                height: 510,
                thumbnailHeight: 105
                */
            },
            920: {
                /*
                thumbnailsPosition: 'bottom',
                orientation: 'horizontal',
                width: 580,
                height: 540,
                thumbnailWidth: 68,
                thumbnailHeight: 105
                */
            }
        }
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
// Показ списка чекбоксов в фильтре каталога
    $(' .two_column').readmore({ //вызов плагина
        speed: 350, //скорость анимации показать скрыть текст
        collapsedHeight: 195, //высота блока краткого текста в px
        moreLink: '<a class="more_filter_btn" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.68 8.39"><g><path d="M200,193.21a1.06,1.06,0,0,1-.75-0.31L193,186.63a1.06,1.06,0,0,1,1.5-1.5l6.26,6.26A1.06,1.06,0,0,1,200,193.21Z" transform="translate(-192.67 -184.82)"/><path d="M200,193.21a1.06,1.06,0,0,1-.75-1.82l6.29-6.26a1.06,1.06,0,0,1,1.5,1.51l-6.29,6.26A1.06,1.06,0,0,1,200,193.21Z" transform="translate(-192.67 -184.82)"/></g></svg> Дополнительно<span class="show_numbers"></span></a>', //Ссылка на раскрытие блока
        lessLink: '<a  class="more_filter_btn active" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.68 8.39"><g><path d="M200,193.21a1.06,1.06,0,0,1-.75-0.31L193,186.63a1.06,1.06,0,0,1,1.5-1.5l6.26,6.26A1.06,1.06,0,0,1,200,193.21Z" transform="translate(-192.67 -184.82)"/><path d="M200,193.21a1.06,1.06,0,0,1-.75-1.82l6.29-6.26a1.06,1.06,0,0,1,1.5,1.51l-6.29,6.26A1.06,1.06,0,0,1,200,193.21Z" transform="translate(-192.67 -184.82)"/></g></svg> Свернуть</a>' //Ссылка на скрытие блока
    });

    /*
    setTimeout(function () {
        $('.good_card__characteristic .two_column').addClass('visible');
    }, 500);
    */
});

/*
$( document).ready(function(  ) {

    $('.search-container .close').click(function(){
        $('.search-header').removeClass('active');
    });

    $(".drop_menu__lang__a").click(function(e) {
        e.preventDefault();
        $(".drop_menu__lang__a").removeClass('active');
        $(this).addClass('active');
    })

    $('#datetimepicker1').datetimepicker({
        language: 'ru',
        format: 'DD.MM.YYYY',
        pickTime: false,
    });


});
*/

$(function() {
    $('.scroll').perfectScrollbar();
});

