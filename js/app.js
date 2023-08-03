$(function () {
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");

    checkScroll(scrollPos, introH);
  
    $(window).on("scroll load resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
  
        checkScroll(scrollPos, introH);
    });
  
    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
  
    /* Smooth Scroll*/
    $("[data-scroll]").on("click", function (event) {
      event.preventDefault();
  
        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");
  
        $("html, body").animate( {
            scrollTop: elementOffset - 70,
        }, 700 );
    });

    /* Collapse */
    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });
});
  