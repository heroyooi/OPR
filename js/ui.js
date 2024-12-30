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
      var tabUI = _.find('.tab-base, .tab-btn');
      var inputUI = _.find('.input-base');
      var countUI = _.find('.counter-base');
      var popupUI = _.find('.popup-wrap');
      var csPopupUI = _.find('.cs-popup-wrap');

      $('.btn-list.evt .btn-base').on('click', function(e){
        e.preventDefault();
        if ($(this).hasClass('disabled')) {
          return;
        }
        if ($(this).closest('.btn-list').hasClass('select-one')) {
          if (!$(this).closest('li').hasClass('on')) {
            $(this).closest('li').addClass('on');
            $(this).closest('li').siblings().removeClass('on');
          } else {
            $(this).closest('li').removeClass('on');
          }
        } else {
          if (!$(this).closest('li').hasClass('on')) {
            $(this).closest('li').addClass('on');
          } else {
            $(this).closest('li').removeClass('on');
          }
        }
        
      });

      $('.btns-wrap.evt .btn-base').on('click', function(e){
        e.preventDefault();
        if ($(this).hasClass('disabled')) {
          return;
        }
        if ($(this).closest('.btns-wrap').hasClass('select-one')) {
          if (!$(this).hasClass('on')) {
            $(this).addClass('on');
            $(this).siblings().removeClass('on');
          }
        } else {
          if (!$(this).hasClass('on')) {
            $(this).addClass('on');
          } else {
            $(this).removeClass('on');
          }
        }
        
      });

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

      if ($(".multi-selectbox").length) {
        $(".multi-selectbox").selectize({
          plugins: ["restore_on_backspace"]
        });
      }
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
      var $content = $('.content-wrap:not(.auto-height) .content-area');
      var $frame = $('.content-wrap:not(.auto-height) .content-frame');
      var $popup_frame = $('.popup-wrap .content-frame');
      var _pd = 40;

      // var $search = $('.content-wrap .search-area');
      // var $tit = $('.content-wrap .tit-area');
      // var _mt = 16;
      var _pop_pd = 106;
      var _pop_title = 72;
      var _pop_btn = 64;

      $(window).on('load resize', function(){
        $wrapper.css('height', $(window).height());
        $content.css('height', $(window).height() - $header.outerHeight() - _pd - $top.outerHeight());
        // $frame.css('height', $(window).height() - $header.outerHeight() - _pd - $top.outerHeight() - ($search.outerHeight() || $tit.outerHeight()) - _mt - _pd);
        if ($frame.closest('.content-frame-wrap').hasClass('monitoring') || $frame.closest('.content-frame-wrap').hasClass('type-2')) {
          $frame.each(function(){ // OPR-WL-226.html (.monitoring), OPR-WL-239.html (.type-2)
            if ($(this).closest('.st-table-area').length == 0) {
              $(this).css('height', $(window).height() - $(this).offset().top - _pd / 2);
            } else {
              if ($frame.closest('.content-frame-wrap').hasClass('type-2')) {
                $(this).css('height', $(window).height() - $(this).offset().top - _pd / 2 - 17);
              } else {
                $(this).css('height', $(window).height() - $(this).offset().top - _pd / 2);
              }
            }
          });
        } else {
          if ($frame.hasClass('mt0')) {
            $frame.each(function(){
              $(this).css('height', $(window).height() - $header.outerHeight() - _pd - $top.outerHeight()); // OPR-WL-231.html
            });
          } else {
            $frame.each(function(){
              $(this).css('height', $(window).height() - $(this).offset().top - _pd);
            });
          }
        }
        
        // OPR-WL-206.html?popup=record
        $popup_frame.each(function(){
          $(this).css('max-height', $(window).height() - _pop_pd - _pop_title - _pop_btn);
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
var closeModal = function(id) {
  $(id).hide();
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

function getOptionsAnim2(id) {
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
    mainClass: 'mfp-zin'
  };
}

// selectbox
function customSbox() {
  var x, selElmnt, a, b, c, i, j;
  x = $(".custom-select");

  x.each(function() {
    selElmnt = $(this).find("select")[0];
    a = $("<div>").addClass("select-selected").html(selElmnt.options[selElmnt.selectedIndex].innerHTML);
    $(this).append(a);

    b = $("<div>").addClass("select-items select-hide");

    for (j = 0; j < selElmnt.length; j++) {
      c = $("<div>").html(selElmnt.options[j].innerHTML);
      c.on("click", function(e) {
        var s, h, y, k, i;
        s = $(this).closest(".custom-select").find("select")[0];
        h = $(this).closest(".select-items").prev(".select-selected")[0];
        
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == $(this).html()) {
            s.selectedIndex = i;
            h.innerHTML = $(this).html();
            y = $(this).siblings(".same-as-selected");
            y.removeClass("same-as-selected");
            $(this).addClass("same-as-selected");

            // 선택된 옵션에 따라 .custom-select에 active 클래스 추가/제거
            if (s.options[i].value == "0") {
              $(this).closest(".custom-select").removeClass("active");
            } else {
              $(this).closest(".custom-select").addClass("active");
            }
            break;
          }
        }
        h.click();
      });
      b.append(c);
    }
    $(this).append(b);

    a.on("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      $(this).next().toggleClass("select-hide");
      $(this).toggleClass("select-arrow-active");
    });
  });

  function closeAllSelect(elmnt) {
    var x, y, i, arrNo = [];
    x = $(".select-items");
    y = $(".select-selected");
    
    y.each(function(index) {
      if (elmnt == this) {
        arrNo.push(index);
      } else {
        $(this).removeClass("select-arrow-active");
      }
    });

    x.each(function(index) {
      if ($.inArray(index, arrNo) === -1) {
        $(this).addClass("select-hide");
      }
    });
  }

  $(document).on("click", function() {
    closeAllSelect();
  });
}

// autocomplete combobox
class ComboboxAutocomplete {
  constructor(comboboxNode, buttonNode, listboxNode) {
    this.comboboxNode = comboboxNode;
    this.buttonNode = buttonNode;
    this.listboxNode = listboxNode;

    this.comboboxHasVisualFocus = false;
    this.listboxHasVisualFocus = false;

    this.hasHover = false;

    this.isNone = false;
    this.isList = false;
    this.isBoth = false;

    this.allOptions = [];

    this.option = null;
    this.firstOption = null;
    this.lastOption = null;

    this.filteredOptions = [];
    this.filter = '';

    var autocomplete = this.comboboxNode.getAttribute('aria-autocomplete');

    if (typeof autocomplete === 'string') {
      autocomplete = autocomplete.toLowerCase();
      this.isNone = autocomplete === 'none';
      this.isList = autocomplete === 'list';
      this.isBoth = autocomplete === 'both';
    } else {
      // default value of autocomplete
      this.isNone = true;
    }

    this.comboboxNode.addEventListener(
      'keydown',
      this.onComboboxKeyDown.bind(this)
    );
    this.comboboxNode.addEventListener(
      'keyup',
      this.onComboboxKeyUp.bind(this)
    );
    this.comboboxNode.addEventListener(
      'click',
      this.onComboboxClick.bind(this)
    );
    this.comboboxNode.addEventListener(
      'focus',
      this.onComboboxFocus.bind(this)
    );
    this.comboboxNode.addEventListener('blur', this.onComboboxBlur.bind(this));

    document.body.addEventListener(
      'pointerup',
      this.onBackgroundPointerUp.bind(this),
      true
    );

    // initialize pop up menu

    this.listboxNode.addEventListener(
      'pointerover',
      this.onListboxPointerover.bind(this)
    );
    this.listboxNode.addEventListener(
      'pointerout',
      this.onListboxPointerout.bind(this)
    );

    // Traverse the element children of domNode: configure each with
    // option role behavior and store reference in.options array.
    var nodes = this.listboxNode.getElementsByTagName('LI');

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      this.allOptions.push(node);

      node.addEventListener('click', this.onOptionClick.bind(this));
      node.addEventListener('pointerover', this.onOptionPointerover.bind(this));
      node.addEventListener('pointerout', this.onOptionPointerout.bind(this));
    }

    this.filterOptions();

    // Open Button

    var button = this.comboboxNode.nextElementSibling;

    if (button && button.tagName === 'BUTTON') {
      button.addEventListener('click', this.onButtonClick.bind(this));
    }
  }

  getLowercaseContent(node) {
    return node.textContent.toLowerCase();
  }

  isOptionInView(option) {
    var bounding = option.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  setActiveDescendant(option) {
    if (option && this.listboxHasVisualFocus) {
      this.comboboxNode.setAttribute('aria-activedescendant', option.id);
      if (!this.isOptionInView(option)) {
        option.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    } else {
      this.comboboxNode.setAttribute('aria-activedescendant', '');
    }
  }

  setValue(value) {
    this.filter = value;
    this.comboboxNode.value = this.filter;
    this.comboboxNode.setSelectionRange(this.filter.length, this.filter.length);
    this.filterOptions();
  }

  setOption(option, flag) {
    if (typeof flag !== 'boolean') {
      flag = false;
    }

    if (option) {
      this.option = option;
      this.setCurrentOptionStyle(this.option);
      this.setActiveDescendant(this.option);

      if (this.isBoth) {
        this.comboboxNode.value = this.option.textContent;
        if (flag) {
          this.comboboxNode.setSelectionRange(
            this.option.textContent.length,
            this.option.textContent.length
          );
        } else {
          this.comboboxNode.setSelectionRange(
            this.filter.length,
            this.option.textContent.length
          );
        }
      }
    }
  }

  setVisualFocusCombobox() {
    this.listboxNode.classList.remove('focus');
    this.comboboxNode.parentNode.classList.add('focus'); // set the focus class to the parent for easier styling
    this.comboboxHasVisualFocus = true;
    this.listboxHasVisualFocus = false;
    this.setActiveDescendant(false);
  }

  setVisualFocusListbox() {
    this.comboboxNode.parentNode.classList.remove('focus');
    this.comboboxHasVisualFocus = false;
    this.listboxHasVisualFocus = true;
    this.listboxNode.classList.add('focus');
    this.setActiveDescendant(this.option);
  }

  removeVisualFocusAll() {
    this.comboboxNode.parentNode.classList.remove('focus');
    this.comboboxHasVisualFocus = false;
    this.listboxHasVisualFocus = false;
    this.listboxNode.classList.remove('focus');
    this.option = null;
    this.setActiveDescendant(false);
  }

  // ComboboxAutocomplete Events

  filterOptions() {
    // do not filter any options if autocomplete is none
    if (this.isNone) {
      this.filter = '';
    }

    var option = null;
    var currentOption = this.option;
    var filter = this.filter.toLowerCase();

    this.filteredOptions = [];
    this.listboxNode.innerHTML = '';

    for (var i = 0; i < this.allOptions.length; i++) {
      option = this.allOptions[i];
      if (
        filter.length === 0 ||
        this.getLowercaseContent(option).indexOf(filter) === 0
      ) {
        this.filteredOptions.push(option);
        this.listboxNode.appendChild(option);
      }
    }

    // Use populated options array to initialize firstOption and lastOption.
    var numItems = this.filteredOptions.length;
    if (numItems > 0) {
      this.firstOption = this.filteredOptions[0];
      this.lastOption = this.filteredOptions[numItems - 1];

      if (currentOption && this.filteredOptions.indexOf(currentOption) >= 0) {
        option = currentOption;
      } else {
        option = this.firstOption;
      }
    } else {
      this.firstOption = null;
      option = null;
      this.lastOption = null;
    }

    return option;
  }

  setCurrentOptionStyle(option) {
    for (var i = 0; i < this.filteredOptions.length; i++) {
      var opt = this.filteredOptions[i];
      if (opt === option) {
        opt.setAttribute('aria-selected', 'true');
        if (
          this.listboxNode.scrollTop + this.listboxNode.offsetHeight <
          opt.offsetTop + opt.offsetHeight
        ) {
          this.listboxNode.scrollTop =
            opt.offsetTop + opt.offsetHeight - this.listboxNode.offsetHeight;
        } else if (this.listboxNode.scrollTop > opt.offsetTop + 2) {
          this.listboxNode.scrollTop = opt.offsetTop;
        }
      } else {
        opt.removeAttribute('aria-selected');
      }
    }
  }

  getPreviousOption(currentOption) {
    if (currentOption !== this.firstOption) {
      var index = this.filteredOptions.indexOf(currentOption);
      return this.filteredOptions[index - 1];
    }
    return this.lastOption;
  }

  getNextOption(currentOption) {
    if (currentOption !== this.lastOption) {
      var index = this.filteredOptions.indexOf(currentOption);
      return this.filteredOptions[index + 1];
    }
    return this.firstOption;
  }

  /* MENU DISPLAY METHODS */

  doesOptionHaveFocus() {
    return this.comboboxNode.getAttribute('aria-activedescendant') !== '';
  }

  isOpen() {
    return this.listboxNode.style.display === 'block';
  }

  isClosed() {
    return this.listboxNode.style.display !== 'block';
  }

  hasOptions() {
    return this.filteredOptions.length;
  }

  open() {
    this.listboxNode.style.display = 'block';
    this.comboboxNode.setAttribute('aria-expanded', 'true');
    this.buttonNode.setAttribute('aria-expanded', 'true');
  }

  close(force) {
    if (typeof force !== 'boolean') {
      force = false;
    }

    if (
      force ||
      (!this.comboboxHasVisualFocus &&
        !this.listboxHasVisualFocus &&
        !this.hasHover)
    ) {
      this.setCurrentOptionStyle(false);
      this.listboxNode.style.display = 'none';
      this.comboboxNode.setAttribute('aria-expanded', 'false');
      this.buttonNode.setAttribute('aria-expanded', 'false');
      this.setActiveDescendant(false);
      this.comboboxNode.parentNode.classList.add('focus');
    }
  }

  /* combobox Events */

  onComboboxKeyDown(event) {
    var flag = false,
      altKey = event.altKey;

    if (event.ctrlKey || event.shiftKey) {
      return;
    }

    switch (event.key) {
      case 'Enter':
        if (this.listboxHasVisualFocus) {
          this.setValue(this.option.textContent);
        }
        this.close(true);
        this.setVisualFocusCombobox();
        flag = true;
        break;

      case 'Down':
      case 'ArrowDown':
        if (this.filteredOptions.length > 0) {
          if (altKey) {
            this.open();
          } else {
            this.open();
            if (
              this.listboxHasVisualFocus ||
              (this.isBoth && this.filteredOptions.length > 1)
            ) {
              this.setOption(this.getNextOption(this.option), true);
              this.setVisualFocusListbox();
            } else {
              this.setOption(this.firstOption, true);
              this.setVisualFocusListbox();
            }
          }
        }
        flag = true;
        break;

      case 'Up':
      case 'ArrowUp':
        if (this.hasOptions()) {
          if (this.listboxHasVisualFocus) {
            this.setOption(this.getPreviousOption(this.option), true);
          } else {
            this.open();
            if (!altKey) {
              this.setOption(this.lastOption, true);
              this.setVisualFocusListbox();
            }
          }
        }
        flag = true;
        break;

      case 'Esc':
      case 'Escape':
        if (this.isOpen()) {
          this.close(true);
          this.filter = this.comboboxNode.value;
          this.filterOptions();
          this.setVisualFocusCombobox();
        } else {
          this.setValue('');
          this.comboboxNode.value = '';
        }
        this.option = null;
        flag = true;
        break;

      case 'Tab':
        this.close(true);
        if (this.listboxHasVisualFocus) {
          if (this.option) {
            this.setValue(this.option.textContent);
          }
        }
        break;

      case 'Home':
        this.comboboxNode.setSelectionRange(0, 0);
        flag = true;
        break;

      case 'End':
        var length = this.comboboxNode.value.length;
        this.comboboxNode.setSelectionRange(length, length);
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  isPrintableCharacter(str) {
    return str.length === 1 && str.match(/\S| /);
  }

  onComboboxKeyUp(event) {
    var flag = false,
      option = null,
      char = event.key;

    if (this.isPrintableCharacter(char)) {
      this.filter += char;
    }

    // this is for the case when a selection in the textbox has been deleted
    if (this.comboboxNode.value.length < this.filter.length) {
      this.filter = this.comboboxNode.value;
      this.option = null;
      this.filterOptions();
    }

    if (event.key === 'Escape' || event.key === 'Esc') {
      return;
    }

    switch (event.key) {
      case 'Backspace':
        this.setVisualFocusCombobox();
        this.setCurrentOptionStyle(false);
        this.filter = this.comboboxNode.value;
        this.option = null;
        this.filterOptions();
        flag = true;
        break;

      case 'Left':
      case 'ArrowLeft':
      case 'Right':
      case 'ArrowRight':
      case 'Home':
      case 'End':
        if (this.isBoth) {
          this.filter = this.comboboxNode.value;
        } else {
          this.option = null;
          this.setCurrentOptionStyle(false);
        }
        this.setVisualFocusCombobox();
        flag = true;
        break;

      default:
        if (this.isPrintableCharacter(char)) {
          this.setVisualFocusCombobox();
          this.setCurrentOptionStyle(false);
          flag = true;

          if (this.isList || this.isBoth) {
            option = this.filterOptions();
            if (option) {
              if (this.isClosed() && this.comboboxNode.value.length) {
                this.open();
              }

              if (
                this.getLowercaseContent(option).indexOf(
                  this.comboboxNode.value.toLowerCase()
                ) === 0
              ) {
                this.option = option;
                if (this.isBoth || this.listboxHasVisualFocus) {
                  this.setCurrentOptionStyle(option);
                  if (this.isBoth) {
                    this.setOption(option);
                  }
                }
              } else {
                this.option = null;
                this.setCurrentOptionStyle(false);
              }
            } else {
              this.close();
              this.option = null;
              this.setActiveDescendant(false);
            }
          } else if (this.comboboxNode.value.length) {
            this.open();
          }
        }

        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  onComboboxClick() {
    if (this.isOpen()) {
      this.close(true);
    } else {
      this.open();
    }
  }

  onComboboxFocus() {
    this.filter = this.comboboxNode.value;
    this.filterOptions();
    this.setVisualFocusCombobox();
    this.option = null;
    this.setCurrentOptionStyle(null);
  }

  onComboboxBlur() {
    this.removeVisualFocusAll();
  }

  onBackgroundPointerUp(event) {
    if (
      !this.comboboxNode.contains(event.target) &&
      !this.listboxNode.contains(event.target) &&
      !this.buttonNode.contains(event.target)
    ) {
      this.comboboxHasVisualFocus = false;
      this.setCurrentOptionStyle(null);
      this.removeVisualFocusAll();
      setTimeout(this.close.bind(this, true), 300);
    }
  }

  onButtonClick() {
    if (this.isOpen()) {
      this.close(true);
    } else {
      this.open();
    }
    this.comboboxNode.focus();
    this.setVisualFocusCombobox();
  }

  /* Listbox Events */

  onListboxPointerover() {
    this.hasHover = true;
  }

  onListboxPointerout() {
    this.hasHover = false;
    setTimeout(this.close.bind(this, false), 300);
  }

  // Listbox Option Events

  onOptionClick(event) {
    this.comboboxNode.value = event.target.textContent;
    this.close(true);
  }

  onOptionPointerover() {
    this.hasHover = true;
    this.open();
  }

  onOptionPointerout() {
    this.hasHover = false;
    setTimeout(this.close.bind(this, false), 300);
  }
}