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
        $(this).siblings().removeAttr('id');
        $(this).attr('id', 'txtTest');
        $(this).siblings().attr('disabled', true);
    });
    $('body').hover(function () {
        var
            cal = $('#cal').length;

        if(cal < 1) {
            $('.input_cal').attr('disabled', false);
        }

        console.log(cal)
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
            $this.find('.hide__groupText').text('Скрыть раздел');
        } else {
            thisBlock.removeClass('hideElements');
            $this.removeClass('openedBlock');
            $this.find('.hide__groupText').text('Развернуть раздел');
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

});



