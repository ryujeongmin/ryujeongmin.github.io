(function() {
  $(function() {
    $(".basic-N2[id='lXM75Yp01Y']").each(function() {
      const $block = $(this);

      // 모바일 메뉴 버튼 클릭 시 메뉴 토글
      $block.find(".btn-momenu").on("click", function() {
        $block.toggleClass("block-active");
        $block.find(".header-gnbitem").removeClass("item-active");
        $block.find(".header-sublist").removeAttr("style");
      });

      // 모바일 닫기 버튼
      $(document).on("click", ".btn-moclose", function() {
        $(".basic-N2").removeClass("block-active");
      });

      // 모바일 GNB 메뉴 클릭 이벤트 (이벤트 위임)
      $(document).on("click", ".header-gnblink", function(e) {
        if (window.innerWidth < 992) {
          e.preventDefault(); // 기본 링크 이동 방지
          const $clickedItem = $(this).parents(".header-gnbitem");
          const $sublist = $clickedItem.find(".header-sublist");

          if (!$clickedItem.hasClass("item-active")) {
            $(".header-gnbitem").removeClass("item-active");
            $(".header-sublist").stop().slideUp(300);
          }
          $clickedItem.toggleClass("item-active");
          $sublist.stop().slideToggle(300);
        }
      });

      // 화면 크기 변경 시 메뉴 초기화
      $(window).on("resize", function() {
        if (window.innerWidth >= 992) {
          $(".header-sublist").removeAttr("style");
          $(".header-gnbitem").removeClass("item-active");
          $(".basic-N2").removeClass("block-active");
        }
      });

      // 풀스크린 GNB 메뉴 열기/닫기
      $block.find(".btn-allmenu").on("click", function() {
        $block.find(".header-fullmenu").addClass("fullmenu-active");
      });
      $block.find(".fullmenu-close").on("click", function() {
        $block.find(".header-fullmenu").removeClass("fullmenu-active");
      });

      // 풀스크린 메뉴 hover 효과
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
