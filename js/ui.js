var ua = navigator.userAgent;
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(ua);
var isWindows = ua.indexOf('Windows') != -1;
var isMac = /Mac|PPC/i.test(ua);

$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results == null){
    return null;
  }
  else {
    return decodeURI(results[1]) || 0;
  }
}

var posY = null;
var magnificPopupConfiguration = function() {
  return {
    beforeOpen: function() {
      posY = window.pageYOffset;
      $('html').css('overflow', 'hidden');
      $('body').css({'position': 'fixed', 'top': -posY});
    },
    open: function() {},
    beforeClose: function() {
      $('html').css('overflow', '');
      $('body').css({'position': '', 'top': ''});
      window.scrollTo(0, posY);
    }
  }
}

var GUI = window.GUI || (function(){
  return {
    init: function(){
      GUI.baseUI($(document));

      AOS.init({ // https://github.com/michalsnik/aos#1-initialize-aos
        duration: 600,
        once: true,
      });

      if ($('#wrap').length) {
        GUI.pageLayout();
      }
      
      if ($('.menu-wrap').length) {
        GUI.gnbMenu();
      }
    },
    baseUI: function($this){
      var _ = $this;
      var csSelectUI = _.find('.select-box');
      var tabUI = _.find('.tab-base');
      var inputUI = _.find('.input-base');
      var countUI = _.find('.counter-base');
      var popupUI = _.find('.popup-wrap');
      var csPopupUI = _.find('.cs-popup-wrap');

      if ($('#gnb').data('active')) {
        var activeIndex = $('#gnb').data('active');
        $('#gnb > li').eq(activeIndex - 1).addClass('on');
      }
      $('#header .s-ico.bookmark').on('click', function(e){
        e.preventDefault();
        if (!$(this).hasClass('on')) {
          $(this).addClass('on');
          $('#header .bookmark-area').show();
        } else {
          $(this).removeClass('on');
          $('#header .bookmark-area').hide();
        }
      });
      $('#header .bookmark-area .bookmark-item .s-ico.close').on('click', function(e){
        e.preventDefault();
        $('#header .s-ico.bookmark').removeClass('on');
        $('#header .bookmark-area').hide();
      });

      var menuSlide = $('.menu-swiper .swiper-slide a.label');
      var menuSwiper = new Swiper('.menu-swiper', {
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        navigation: {
          nextEl: ".navi-area .arrow-r",
          prevEl: ".navi-area .arrow-l",
        },
      });
      menuSlide.on('click', function(e){
        e.preventDefault();
        $(this).closest('.swiper-slide').addClass('on');
        $(this).closest('.swiper-slide').siblings().removeClass('on');
        menuSwiper.slideTo(menuSlide.index(this))
      });
      $('.menu-swiper .swiper-slide .s-ico.close').on('click', function(){
        $(this).closest('.swiper-slide').remove();
      });
      // $('.navi-area .arrow-l').on('click', function(e){
      //   e.preventDefault();
      //   menuSwiper.slidePrev();
      // });
      // $('.navi-area .arrow-r').on('click', function(e){
      //   e.preventDefault();
      //   menuSwiper.slideNext();
      // });

      if (inputUI.length) {
        inputUI.each(function(){
          if ($(this).val() != '') {
            $(this).addClass('is-value')
          }
        })
      }

      $('.input-wrap .s-ico.password').on('click', function(){
        var _input = $(this).closest('.input-wrap');
        if (!_input.hasClass('active')) {
          _input.addClass('active');
          _input.find('.input-base').attr('type', 'text').focus();
        } else {
          _input.removeClass('active');
          _input.find('.input-base').attr('type', 'password').focus();
        }
      });

      // $('.lnb-list .s-ico.star').on('click', function(){
      //   if (!$(this).hasClass('on')) {
      //     $(this).addClass('on');
      //   } else {
      //     $(this).removeClass('on');
      //   }
      // });
      $('.lnb-list > li > a.menu.toggle').on('click', function(e){
        e.preventDefault();
        if (!$(this).closest('li').hasClass('on')) {
          $(this).closest('li').siblings().removeClass('on');
          $(this).closest('li').addClass('on');
        } else {
          $(this).closest('li').removeClass('on');
        }
      });
      
      $('.toast-area .toast .s-ico.close').on('click', function(e){
        e.preventDefault();
        $(this).closest('.toast').hide();
      });
      $('.modal-wrap .s-ico.close').on('click', function(e){
        e.preventDefault();
        $(this).closest('.modal-wrap').hide();
      });

      $('.select-base').each(function(){
        if ($(this).val() == 0) {
          $(this).addClass('no-value');
        }
        $(this).on('change', function(){
          if ($(this).val() == 0) {
            $(this).addClass('no-value');
          } else {
            $(this).removeClass('no-value');
          }
        });
      });

      $('.register-wrap li .close').on('click', function(e){
        e.preventDefault();
        $(this).closest('li').remove();
      });

      $('.map-area .s-ico').each(function(index){
        // $(this).data('ico', index);
        var main = 1;
        var sub = 1;
        var $info = $(this).find('.s-info');
        
        function icoHide() {
          if (main && sub) {
            $info.hide();
          }
        }
        
        $(this).on('mouseenter', function(){
          main = 0;
          $('.map-area .s-info').hide();
          $info.show();
        });
        $info.on('mouseenter', function(){
          sub = 0;
        });
        $(this).on('mouseleave', function(){
          main = 1;
          setTimeout(icoHide, 300);
        });
        $info.on('mouseleave', function(){
          sub = 1;
          setTimeout(icoHide, 300);
        });
      });

      if (tabUI.length) {
        tabUI.each(function(){
          var target = $(this).find('li.on').find('a').attr('href');
          $(target).show();
        })
        tabUI.find('a').on('click', function(e){
          e.preventDefault();
          var target = $(this).attr('href');
          $(this).closest('li').addClass('on');
          $(this).closest('li').siblings().removeClass('on');
          $(target).show();
          $(target).siblings().hide();
        });
      }

      if (countUI.length) {
        countUI.each(function(){
          var $input = $(this).find('input'),
              $minus = $(this).find('.btn-minus'),
              $plus = $(this).find('.btn-plus');
          var min = $(this).data('min'),
              max = $(this).data('max');

          if ($input.val() > 0) {
            $input.addClass('active');
          }

          $minus.on('click', function(){
            if (min) {
              if ($input.val() > min) $input.val(Number($input.val()) - 1);
            } else {
              if ($input.val() > 0) $input.val(Number($input.val()) - 1);
              if ($input.val() == 0) {
                $input.removeClass('active');
              }
            }
          });

          $plus.on('click', function(){
            if (!$input.hasClass('active')) {
              $input.addClass('active');
            }
            if (max) {
              if ($input.val() < max) $input.val(Number($input.val()) + 1);
            } else {
              $input.val(Number($input.val()) + 1);
            }
          });
        });
      }

      if (popupUI.length) {
        //팝업 (공통) - jquery magnific 팝업
        _.find('.btn-base.disabled').on('click', function (e) { // 비활성화 버튼
          e.preventDefault();
        });

        _.find('.btn-popup-modal a').magnificPopup({
          type: 'inline',
          preloader: false,
          modal: false
        });
        $(document).on('click', '.b-mfp-close', function (e) {
          e.preventDefault();
          $.magnificPopup.close();
        });
        
        _.find('.btn-popup-anim-1:not(.disabled) a, a.btn-popup-anim-1:not(.disabled)').magnificPopup({
          type: 'inline',
          fixedContentPos: true,
          fixedBgPos: true,
          overflowY: 'auto',
          closeBtnInside: true,
          preloader: false,
          midClick: true,
          removalDelay: 300,
          mainClass: 'mfp-zin'
        });
        _.find('.btn-popup-anim-2:not(.disabled) a, a.btn-popup-anim-2:not(.disabled)').magnificPopup({
          type: 'inline',
          fixedContentPos: true,
          fixedBgPos: true,
          overflowY: 'auto',
          closeBtnInside: true,
          preloader: false,
          midClick: true,
          removalDelay: 300,
          mainClass: 'fade-slideup fix-bottom',
          callbacks: magnificPopupConfiguration()
        });

        _.find('.btn-popup-anim-3:not(.disabled) a, a.btn-popup-anim-3:not(.disabled)').magnificPopup({
          type: 'inline',
          fixedContentPos: true,
          fixedBgPos: true,
          overflowY: 'auto',
          closeBtnInside: true,
          preloader: false,
          midClick: true,
          removalDelay: 300,
          mainClass: 'fade-slideleft fix-right',
          callbacks: magnificPopupConfiguration()
        });

		    $('.popup-wrap').each(function(){
          if ($(this).data('width')) {
            $(this).css('width', $(this).data('width'));
          }
        });
      }

      if (csPopupUI.length) {
        csPopupUI.find('.mfp-close').on('click', function(){
          var target = $(this).closest('.cs-fullpage').attr('id');
          closeCSPopup();
        });
        $('.cs-popup-dimm').on('click', function(){
          var target = $(this).next('.cs-popup-wrap').attr('id');
          closeCSPopup();
        });
      }

      _.on('click', function(e){
        if (csSelectUI.length) {
          if (!$(e.target).closest('.select-box .value, .select-box ul').length) {
            csSelectUI.removeClass('on');
          }
        }
      });
    },
    gnbMenu: function(){
      var $areaMenu = $('.menu-wrap');

      $(window).on('load resize', function(){
        $('.m-container').each(function(){
          var frameH = $(window).height() - 62;
          var $frame = $(this).children('div');
          $frame.css({ 'height': frameH });
          if ($frame.find('.m-inner').outerHeight() > frameH) {
            $(this).addClass('is-scroll');
          } else {
            $(this).removeClass('is-scroll');
          }
        });
      });

      $('.fm-wrap li.menu a').on('click', function(e){
        e.preventDefault();
        openGNB();
      });

      $areaMenu.find('.btn-back').on('click touchstart', function(e){
        e.preventDefault();
        closeGNB();
      });
    },
    pageLayout: function(){
      var $wrapper = $('#wrap');
      var $header = $('#header');
      var $top = $('.content-wrap .content-top');
      var $content = $('.content-wrap .content-area');
      var $frame = $('.content-wrap .content-frame');
      var _pd = 40;

      // var $search = $('.content-wrap .search-area');
      // var $tit = $('.content-wrap .tit-area');
      // var _mt = 16;

      $(window).on('load resize', function(){
        $wrapper.css('height', $(window).height());
        $content.css('height', $(window).height() - $header.outerHeight() - _pd - $top.outerHeight());
        // $frame.css('height', $(window).height() - $header.outerHeight() - _pd - $top.outerHeight() - ($search.outerHeight() || $tit.outerHeight()) - _mt - _pd);
        $frame.each(function(){
          $(this).css('height', $(window).height() - $(this).offset().top - _pd);
        });
        
      });
    }
  }
}());

$(function(){
  GUI.init();
})

var openModal = function(id) {
  $(id).show();
};

// 이중 팝업을 열고 닫기 위한 함수
var openCSPopup = function(id) {
  $('.cs-popup-dimm#' + id + '-dimm, .cs-popup-wrap#' + id).fadeIn(200);
};
var closeCSPopup = function(id) {
  if (id) {
    $('.cs-popup-dimm#' + id + '-dimm, .cs-popup-wrap#' + id).fadeOut(200);
  } else {
    $('.cs-popup-dimm, .cs-popup-wrap').fadeOut(200);
  }  
}

// 메뉴 활성화, 비활성화를 위한 변수 및 함수
var rememberY = null;
var openGNB = function() {
  $('.menu-wrap').addClass('on');
  $('.menu-dimm').fadeIn(150);
  $('.m-section#menu-area').addClass('on');
  rememberY = window.pageYOffset;
  $('html').css('overflow', 'hidden');
  $('body').css({'position': 'fixed', 'top': -rememberY});
}
var closeGNB = function(){
  $('.menu-wrap').removeClass('on');
  $('.menu-dimm').fadeOut(150);
  $('html').css('overflow', '');
  $('body').css({'position': '', 'top': ''});
  window.scrollTo(0, rememberY);
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getOptionsAnim(id) {
  return {
    items: {
      src: id,
      type: 'inline',
    },
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'fade-slideleft fix-right',
    callbacks: magnificPopupConfiguration()
  };
}