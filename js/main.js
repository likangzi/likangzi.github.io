jQuery(document).ready(function ($) {

    // PhotoStack Initi
    if ($('#photostack-1').length) {
        new Photostack(document.getElementById('photostack-1'), {
            callback: function (item) {
                //console.log(item)
            }
        });
    }

    // Full Page menu
    $(".sidemenu").fullpageMenu({
        animationSpeed: 200
    });

    //Portfolio
    var gridContainerWorld = $('#grid-container-world'), filtersContainer = $('#filters-container');

    // init cubeportfolio
    gridContainerWorld.cubeportfolio({
        defaultFilter: '*',
        animationType: 'rotateRoom',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'overlayBottomAlong',
        displayType: 'bottomToTop',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxShowCounter: true,
    });

    // add listener for filters click
    filtersContainer.on('click', '.cbp-filter-item', function (e) {
        var me = $(this), wrap;

        // get cubeportfolio data and check if is still animating (reposition) the items.
        if (!$.data(gridContainerWorld[0], 'cubeportfolio').isAnimating) {
            if (filtersContainer.hasClass('cbp-l-filters-dropdown')) {
                wrap = $('.cbp-l-filters-dropdownWrap');
                wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');
                wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());
                me.addClass('cbp-filter-item-active');
            } else {
                me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
            }
        }
        // filter the items
        gridContainerWorld.cubeportfolio('filter', me.data('filter'), function () {
        });

    });

    // activate counter for filters
    gridContainerWorld.cubeportfolio('showCounter', filtersContainer.find('.cbp-filter-item'));



    //Portfolio
    var gridContainerChina = $('#grid-container-china'), filtersContainer = $('#filters-container');

    // init cubeportfolio
    gridContainerChina.cubeportfolio({
        defaultFilter: '*',
        animationType: 'rotateRoom',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'overlayBottomAlong',
        displayType: 'bottomToTop',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxShowCounter: true,
    });

    // add listener for filters click
    filtersContainer.on('click', '.cbp-filter-item', function (e) {
        var me = $(this), wrap;

        // get cubeportfolio data and check if is still animating (reposition) the items.
        if (!$.data(gridContainerChina[0], 'cubeportfolio').isAnimating) {
            if (filtersContainer.hasClass('cbp-l-filters-dropdown')) {
                wrap = $('.cbp-l-filters-dropdownWrap');
                wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');
                wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());
                me.addClass('cbp-filter-item-active');
            } else {
                me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
            }
        }
        // filter the items
        gridContainerChina.cubeportfolio('filter', me.data('filter'), function () {
        });

    });

    // activate counter for filters
    gridContainerChina.cubeportfolio('showCounter', filtersContainer.find('.cbp-filter-item'));


    //Portfolio
    var gridContainerThailand = $('#grid-container-thailand'), filtersContainer = $('#filters-container');

    // init cubeportfolio
    gridContainerThailand.cubeportfolio({
        defaultFilter: '*',
        animationType: 'rotateRoom',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'overlayBottomAlong',
        displayType: 'bottomToTop',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxShowCounter: true,
    });

    // add listener for filters click
    filtersContainer.on('click', '.cbp-filter-item', function (e) {
        var me = $(this), wrap;

        // get cubeportfolio data and check if is still animating (reposition) the items.
        if (!$.data(gridContainerThailand[0], 'cubeportfolio').isAnimating) {
            if (filtersContainer.hasClass('cbp-l-filters-dropdown')) {
                wrap = $('.cbp-l-filters-dropdownWrap');
                wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');
                wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());
                me.addClass('cbp-filter-item-active');
            } else {
                me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
            }
        }
        // filter the items
        gridContainerThailand.cubeportfolio('filter', me.data('filter'), function () {
        });

    });

    // activate counter for filters
    gridContainerThailand.cubeportfolio('showCounter', filtersContainer.find('.cbp-filter-item'));



    //Portfolio
    var gridContainerNetherlands = $('#grid-container-netherlands'), filtersContainer = $('#filters-container');

    // init cubeportfolio
    gridContainerNetherlands.cubeportfolio({
        defaultFilter: '*',
        animationType: 'rotateRoom',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'overlayBottomAlong',
        displayType: 'bottomToTop',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxShowCounter: true,
    });

    // add listener for filters click
    filtersContainer.on('click', '.cbp-filter-item', function (e) {
        var me = $(this), wrap;

        // get cubeportfolio data and check if is still animating (reposition) the items.
        if (!$.data(gridContainerNetherlands[0], 'cubeportfolio').isAnimating) {
            if (filtersContainer.hasClass('cbp-l-filters-dropdown')) {
                wrap = $('.cbp-l-filters-dropdownWrap');
                wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');
                wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());
                me.addClass('cbp-filter-item-active');
            } else {
                me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
            }
        }
        // filter the items
        gridContainerNetherlands.cubeportfolio('filter', me.data('filter'), function () {
        });

    });

    // activate counter for filters
    gridContainerNetherlands.cubeportfolio('showCounter', filtersContainer.find('.cbp-filter-item'));





    // activate all tooltips
    $('[data-toggle~="tooltip"]').tooltip({
        container: 'body'
    });

    // activate all popovers
    $('[data-toggle~="popover"]').popover({
        container: 'body'
    });

    //Superslides
    $('#slides').superslides({
        slide_easing: 'easeInOutCubic',
        slide_speed: 800,
        pagination: true,
        hashchange: false,
        scrollable: true,
        animation: 'fade'
    });


    $.fn.cntl = function (options) {

        /* default settings */
        var settings = $.extend({
            revealbefore: 200, /* this is the amount of "scroll padding" to allow (the more, the later the state will be revealed) */
            anim_class: 'cntl-animate', /* the anim class, this class should have animation rules in css */
            onreveal: null /* a callback once the state has been revealed */
        }, options);


        return this.each(function () {

            var statelist = $(this).find('.cntl-state');
            var bar_fill = $(this).find('.cntl-bar-fill');
            var states = [];
            var tbf = 0;


            function setupElements() {

                for (var i = 0; i < statelist.length; i++) {

                    states[i] = {};
                    states[i]['top'] = $(statelist[i]).offset().top + settings.revealbefore;
                    states[i]['elm'] = $(statelist[i]);

                }
                ;


                revealElements();

            }

            function revealElements() {

                var windowtop = $(window).scrollTop();
                var windowbtm = windowtop + $(window).height();

                for (var i = 0; i < states.length; i++) {

                    if (states[i].top > windowtop && states[i].top < windowbtm) {
                        if (
                            !states[i].elm.hasClass(settings.anim_class) &&
                            $.isFunction(settings.onreveal)) {
                            settings.onreveal.call(this, states[i].elm);
                        }

                        states[i].elm.addClass(settings.anim_class);
                        var h = states[i].elm.position().top;

                        if (h > tbf) {
                            tbf = h;
                        }
                        bar_fill.height(tbf);

                    }
                }
                ;

            }

            $(window).on('scroll', revealElements);
            $(window).on('load', setupElements)

        });
    }

});
