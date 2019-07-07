$(function () {
    var
        w = $(window).width();

    $('.popup__container').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation();
        return false;
    });


    /////////////////////////////////////////////
    $('.hamburger__button').click(function (e) {
        e.preventDefault();

        var windowTop = $(window).scrollTop();

        setTimeout(function () {
            $('body').attr('data-top', windowTop);
            $('.header__nav__container').addClass('openedNav');
            $('html, body').css({'overflow' : 'hidden', 'position' : 'fixed'});

            var windowTopData = $('body').attr('data-top');

            $('body').scrollTop(windowTopData);
        }, 50);
    });

    $('.vav__close, .nav__overlay').click(function (e) {
        e.preventDefault();

        var windowTop = $('body').attr('data-top');

        $('.header__nav__container').removeClass('openedNav');
        $('html, body').css({'overflow' : 'visible', 'position' : 'relative'});

        $(window).scrollTop(windowTop);

    });



    ////////////////////////////
    $('.input__select__text').click(function () {
        var
            thisContainer = $(this).closest('.input__selsct');

        if(!thisContainer.hasClass('openedSelect')){
            thisContainer.addClass('openedSelect');
        } else {
            thisContainer.removeClass('openedSelect');
        }

    });

    $('.input__option').click(function () {
        var
            $this = $(this),
            thisContainer = $this.closest('.input__selsct'),
            thisText = thisContainer.find('.input__select__text'),
            thisInput = thisContainer.find('.filterInput'),
            thisVal = $this.text();

        $this.addClass('active');
        $this.siblings().removeClass('active');
        thisText.text(thisVal);
        thisText.addClass('blackText')
        thisInput.val(thisVal);
        thisContainer.removeClass('openedSelect');
    });




    ////////////////////////////////////////////////
    $('.input_cal').focus(function () {
        var
            thisInput = $(this);

        $(this).siblings().removeAttr('id');
        $(this).attr('id', 'txtTest');
        setTimeout(function () {
            $('.closeCalendar').show();
        }, 500);

        setTimeout(function () {
            $('.eformDay').click(function () {
                $('.closeCalendar').hide();
                thisInput.css({'color' : '#192229'});
            });
        }, 100);
    });

    $('.closeCalendar').click(function (e) {
        $(this).hide();
    });



    ////////////////////////////
    $('.hide__group').click(function (e) {
        e.preventDefault();

        var
            $this = $(this),
            thisBlock = $this.closest('.stat__grope');

        if(!$this.hasClass('openedBlock')) {
            thisBlock.addClass('hideElements');
            $this.addClass('openedBlock');
            $this.find('.hide__groupText').text('Развернуть раздел');
        } else {
            thisBlock.removeClass('hideElements');
            $this.removeClass('openedBlock');
            $this.find('.hide__groupText').text('Скрыть раздел');
        }
    });




    ////////////////////////////////
    $('.stat__table').each(function () {
       var
           $this = $(this),
           rowsLength = $this.find('.stat__table__row').length;

       if(rowsLength > 9) {
           $this.addClass('showMoreBlock');
       } else {
           $this.addClass('startAll');
       }
    });

    $('.stat__table .show__bore__stat').click(function (e) {
        e.preventDefault();

        var
            $this = $(this),
            thisBlock = $this.closest('.stat__table');

        if(!$this.hasClass('openedBlock')) {
            thisBlock.addClass('shoeElements');
            $this.addClass('openedBlock');
            $this.text('Скрыть');
        } else {
            thisBlock.removeClass('shoeElements');
            $this.removeClass('openedBlock');
            $this.text('Показать ещё');
        }
    });



    ////////////////////////////////
    $('.stat__infographick').each(function () {
        var
            $this = $(this),
            rowsLength = $this.find('.stat__infographick__one').length;

        if(rowsLength > 6) {
            $this.addClass('showMoreBlock');
        } else {
            $this.addClass('startAll');
        }
    });

    $('.stat__infographick .show__bore__stat').click(function (e) {
        e.preventDefault();

        var
            $this = $(this),
            thisBlock = $this.closest('.stat__infographick');

        if(!$this.hasClass('openedBlock')) {
            thisBlock.addClass('shoeElements');
            $this.addClass('openedBlock');
            $this.text('Скрыть');
        } else {
            thisBlock.removeClass('shoeElements');
            $this.removeClass('openedBlock');
            $this.text('Показать ещё');
        }
    });

    $('.grope__bidden__bottom').click(function (e) {
        e.preventDefault();

        $(this).closest('.stat__grope').find('.hide__group__button').click();
    });





    ////////////////////////////////
    $('.long_tata').each(function () {
        var
            $this = $(this),
            thisW = $this.width(),
            thisCall = $this.closest('.stat__table__call'),
            thisCallW = thisCall.width(),
            thisText = $this.text();

        if(thisW > thisCallW) {
            thisCall.prepend('<div class="tolltip">'+thisText+'</div>');
            thisCall.css({'z-index' : '4'});
        }
    });



    ////////////////////////////////
    $(window).scroll(function () {
        var
            scrollTop = $(window).scrollTop();

        $('.stat__grope').each(function() {
            var
                $this = $(this),
                thisOffset = $this.offset().top,
                thisHeight = $this.height(),
                thisId = $this.attr('id'),
                thisHref = '#'+thisId,
                thisLink = $("[href='" + thisHref + "']"),
                thisItem = thisLink.closest('li');

            if(scrollTop + 118 >= thisOffset && scrollTop < thisOffset + thisHeight) {
                thisLink.addClass('active');
                thisItem.siblings().find('a').removeClass('active');
            }
        });
    });

    // Якорні посилання
    $('.stat__nav__item a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({'scrollTop': $target.offset().top - 117  }, 1000, 'swing', function () {});
        $('.hamburger__nav').removeClass('opened');
        $('.header__menu').fadeOut(500);
        $('html, body').css({'overflow' : 'visible'});
        setTimeout(function(){
            $('.header__form').css({'z-index' : '-10', 'opacity' : '0'});
        }, 1000);
    });

});



