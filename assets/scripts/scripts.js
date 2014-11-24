function init() {
	
	(function($) {
  $.fn.placeholder = function() {
    if(typeof document.createElement("input").placeholder == 'undefined') {
      $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
          input.removeClass('placeholder');
        }
      }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
          input.addClass('placeholder');
          input.val(input.attr('placeholder'));
        }
      }).blur().parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
          var input = $(this);
          if (input.val() == input.attr('placeholder')) {
            input.val('');
          }
      })
    });
  }
}
})(jQuery);

	$("#tabs1 input").one("click",function(){
		$(this).removeAttr("value");
		});
	 
			
    var h = $(document).height();
    $("#maps").click(function () {
        $("#lightbox").show();
        $("#lightbox").height(h);
        $("#lightbox-maps").show();
		
    });
    $("#lightbox").click(function () {
        $("#lightbox").hide();
        $("#lightbox-maps").hide();
    });
    $(".icon-file").click(function () {
        $("#lightbox").show();
        $("#lightbox").height(h);
        $("#lightbox-report-ad").show();
		$("html, body").animate({ scrollTop: 0 }, "slow");
    });
    $("#lightbox").click(function () {
        $("#lightbox").hide();
        $("#lightbox-report-ad").hide();
    });
    $(".close-img").click(function () {
        $("#lightbox").hide();
		$("#lightbox-maps").hide();
        $("#lightbox-report-ad").hide();
    });
    $(function () {
        $("#tabs1, #tabs2, #tabs3").tabs();
        $("#search-panel .button:eq(0)").click(function () {
            $("#search-panel .list:eq(0)").toggle("slow");
        })
        $("#search-panel .button:eq(1)").click(function () {
            $("#search-panel .list:eq(1)").toggle("slow");
        })
        $("#search-panel .button:eq(2)").click(function () {
            $("#search-panel .list:eq(2)").toggle("slow");
        })
        $("input[type=submit]").button()
    });
    $("#place-an-ad ul:eq(0) li h3").click(function () {
        $("#place-an-ad ul:eq(1)").css("visibility", "visible");
        $("#place-an-ad ul:eq(2)").css("visibility", "hidden");
        $("#place-an-ad ul:eq(1) li h3").css("background-image", "");
        $("#place-an-ad ul:eq(1) li h3").css("color", "#666");
        $("#place-an-ad ul:eq(0) li h3").css("background-image", "url('assets/images/post-an-ad/light-gray-bg.png')");
        $("#place-an-ad ul:eq(0) li h3").css("color", "#666");
        $(this).css("color", "#fff");
        $(this).css("background-image", "url(assets/images/post-an-ad/blue-bg.png)");
    });
    $("#place-an-ad ul:eq(1) li h3").click(function () {
        $("#place-an-ad ul:eq(2)").css("visibility", "visible");
        $("#place-an-ad ul:eq(1) li h3").css("background-image", "");
        $("#place-an-ad ul:eq(1) li h3").css("color", "#666");
        $("#place-an-ad ul:eq(2) li h3").css("background-image", "");
        $("#place-an-ad ul:eq(2) li h3").css("color", "#666");
        $(this).css("background-image", "url(assets/images/post-an-ad/blue-bg.png)");
        $(this).css("color", "#fff");
    });
    $("#place-an-ad ul:eq(2) li h3").click(function () {
        $("#place-an-ad ul:eq(2) li h3").css("background-image", "");
        $("#place-an-ad ul:eq(2) li h3").css("color", "#666");
        $(this).css("background-image", "url(assets/images/post-an-ad/blue-bg.png)");
        $(this).css("color", "#fff");
    });
    $(document).ready(function () {
        $("#myController").jFlow({
            controller: ".jFlowControl", // must be class, use . sign
            slideWrapper: "#jFlowSlider", // must be id, use # sign
            slides: "#mySlides", // the div where all your sliding divs are nested in
            selectedWrapper: "jFlowSelected", // just pure text, no sign
            effect: "flow", //this is the slide effect (rewind or flow)
            width: "100%", // this is the width for the content-slider
            height: "300px", // this is the height for the content-slider
            duration: 400, // time in milliseconds to transition one slide
            pause: 5000, //time between transitions
            prev: ".jFlowPrev", // must be class, use . sign
            next: ".jFlowNext", // must be class, use . sign
            auto: true
			
			
        });
		
		$.fn.placeholder();
    });
}

function toggle(source) {
    checkboxes = document.getElementsByName('foo');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
}