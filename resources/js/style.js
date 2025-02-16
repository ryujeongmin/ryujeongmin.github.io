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
