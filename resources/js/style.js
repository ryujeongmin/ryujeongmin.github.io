/* basic-N1 */
(function() {
  $(function() {
    $(".basic-N1[id=\'QRM71s2xqy\']").each(function() {
      const $block = $(this);
      // Header Mobile 1Depth Click
      if (window.innerWidth <= 992) {
        $block.find(".header-gnbitem").each(function() {
          const $gnblink = $(this).find(".header-gnblink");
          const $sublist = $(this).find(".header-sublist");
          if ($sublist.length) {
            $gnblink.attr("href", "javascript:void(0);");
          }
        });
      }
      // Mobile Top
      $block.find(".btn-momenu").on("click", function() {
        $block.toggleClass("block-active");
        $block.find(".header-gnbitem").removeClass("item-active");
        $block.find(".header-sublist").removeAttr('style');
      });
      // Mobile Gnb
      function handleGnbEvents() {
        $block.find(".header-gnbitem").each(function() {
          const $this = $(this);
          const $thislink = $this.find(".header-gnblink");
          const $sublist = $this.find(".header-sublist");
          $thislink.off("click");
          if (window.innerWidth < 992) {
            $thislink.on("click", function() {
              const $clickedItem = $(this).parents(".header-gnbitem");
              if (!$clickedItem.hasClass("item-active")) {
                $block.find(".header-gnbitem").removeClass("item-active");
                $block.find(".header-sublist").stop().slideUp(300);
              }
              $clickedItem.toggleClass("item-active");
              $sublist.stop().slideToggle(300);
            });
          } else {
            $sublist.removeAttr('style');
            $block.removeClass("block-active");
            $block.find(".header-gnbitem").removeClass("item-active");
          }
        });
      }
      handleGnbEvents();
      $(window).on("resize", function() {
        handleGnbEvents();
      });
      // Scroll Header
      $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
          $block.addClass('header-top-active');
        } else {
          $block.removeClass('header-top-active');
        }
      });
      // Full Gnb
      $block.find(".btn-allmenu").on("click", function() {
        $block.find(".header-fullmenu").addClass("fullmenu-active");
      });
      $block.find(".fullmenu-close").on("click", function() {
        $block.find(".header-fullmenu").removeClass("fullmenu-active");
      });
      // Full Gnb DecoLine
      $block.find(".fullmenu-gnbitem").each(function() {
        const $this = $(this);
        $this.on("mouseover", function() {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").addClass("on");
          }
        });
        $this.on("mouseout", function() {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").removeClass("on");
          }
        });
      });
    });
  });
})();
/* basic-N5 */
(function() {
  $(function() {
    $(".basic-N5[id=\'hUM733P3Vk\']").each(function() {
      const $block = $(this);
      // Swiper
      const swiper = new Swiper(".basic-N5[id=\'hUM733P3Vk\'] .contents-swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: ".basic-N5[id=\'hUM733P3Vk\'] .swiper-pagination",
          type: "fraction",
          clickable: true,
          renderFraction: function(currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + '<span class="contents-deco"></span>' + '<span class="' + totalClass + '"></span>';
          }
        },
        navigation: {
          nextEl: ".basic-N5[id=\'hUM733P3Vk\'] .swiper-button-next",
          prevEl: ".basic-N5[id=\'hUM733P3Vk\'] .swiper-button-prev",
        },
      });
      // Swiper Play, Pause Button
      const pauseButton = $block.find('.swiper-button-pause');
      const playButton = $block.find('.swiper-button-play');
      playButton.hide();
      pauseButton.show();
      pauseButton.on('click', function() {
        swiper.autoplay.stop();
        playButton.show();
        pauseButton.hide();
      });
      playButton.on('click', function() {
        swiper.autoplay.start();
        playButton.hide();
        pauseButton.show();
      });
    });
  });
})();
/* basic-N9 */
(function() {
  $(function() {
    $(".basic-N9[id=\'GrM71s2yNK\']").each(function() {
      const $block = $(this);
      // Swiper
      const swiper = new Swiper(".basic-N9[id=\'GrM71s2yNK\'] .contents-swiper", {
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: true,
        navigation: {
          nextEl: ".basic-N9[id=\'GrM71s2yNK\'] .swiper-button-next",
          prevEl: ".basic-N9[id=\'GrM71s2yNK\'] .swiper-button-prev",
        },
      });
    });
  });
})();
/* basic-N2 [lXM75Yp01Y] */
(function() {
  $(function() {
    $(".basic-N2[id=\'lXM75Yp01Y\']").each(function() {
      const $block = $(this);
      // Mobile Top
      $block.find(".btn-momenu").on("click", function() {
        $block.toggleClass("block-active");
        $block.find(".header-gnbitem").removeClass("item-active");
        $block.find(".header-sublist").removeAttr("style");
      });
      $block.find(".btn-moclose").on("click", function() {
        $block.removeClass("block-active");
      });
      // Mobile Gnb
      function handleGnbEvents() {
        $block.find(".header-gnbitem").each(function() {
          const $this = $(this);
          const $thislink = $this.find(".header-gnblink");
          const $sublist = $this.find(".header-sublist");
          $thislink.off("click");
          if (window.innerWidth < 992) {
            $thislink.on("click", function() {
              const $clickedItem = $(this).parents(".header-gnbitem");
              if (!$clickedItem.hasClass("item-active")) {
                $(".header-gnbitem").removeClass("item-active");
                $(".header-sublist").stop().slideUp(300);
              }
              $clickedItem.toggleClass("item-active");
              $sublist.stop().slideToggle(300);
            });
          } else {
            $sublist.removeAttr("style");
            $block.removeClass("block-active");
            $(".header-gnbitem").removeClass("item-active");
          }
        });
      }
      handleGnbEvents();
      $(window).on("resize", function() {
        handleGnbEvents();
      });
      // Full Gnb
      $block.find(".btn-allmenu").on("click", function() {
        $block.find(".header-fullmenu").addClass("fullmenu-active");
      });
      $block.find(".fullmenu-close").on("click", function() {
        $block.find(".header-fullmenu").removeClass("fullmenu-active");
      });
      // Full Gnb DecoLine
      $block.find(".fullmenu-gnbitem").each(function() {
        const $this = $(this);
        $this.on("mouseover", function() {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").addClass("on");
          }
        });
        $this.on("mouseout", function() {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").removeClass("on");
          }
        });
      });
    });
  });
})();
/* basic-N2 [ljm768H1yG] */
(function() {
  $(function() {
    $(".basic-N2[id=\'ljm768H1yG\']").each(function() {
      const $block = $(this);
      // Mobile Top
      $block.find(".btn-momenu").on("click", function() {
        $block.toggleClass("block-active");
        $block.find(".header-gnbitem").removeClass("item-active");
        $block.find(".header-sublist").removeAttr("style");
      });
      $block.find(".btn-moclose").on("click", function() {
        $block.removeClass("block-active");
      });
      // Mobile Gnb
      function handleGnbEvents() {
        $block.find(".header-gnbitem").each(function() {
          const $this = $(this);
          const $thislink = $this.find(".header-gnblink");
          const $sublist = $this.find(".header-sublist");
          $thislink.off("click");
          if (window.innerWidth < 992) {
            $thislink.on("click", function() {
              const $clickedItem = $(this).parents(".header-gnbitem");
              if (!$clickedItem.hasClass("item-active")) {
                $(".header-gnbitem").removeClass("item-active");
                $(".header-sublist").stop().slideUp(300);
              }
              $clickedItem.toggleClass("item-active");
              $sublist.stop().slideToggle(300);
            });
          } else {
            $sublist.removeAttr("style");
            $block.removeClass("block-active");
            $(".header-gnbitem").removeClass("item-active");
          }
        });
      }
      handleGnbEvents();
      $(window).on("resize", function() {
        handleGnbEvents();
      });
      // Full Gnb
      $block.find(".btn-allmenu").on("click", function() {
        $block.find(".header-fullmenu").addClass("fullmenu-active");
      });
      $block.find(".fullmenu-close").on("click", function() {
        $block.find(".header-fullmenu").removeClass("fullmenu-active");
      });
      // Full Gnb DecoLine
      $block.find(".fullmenu-gnbitem").each(function() {
        const $this = $(this);
        $this.on("mouseover", function() {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").addClass("on");
          }
        });
        $this.on("mouseout", function() {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").removeClass("on");
          }
        });
      });
    });
  });
})();
