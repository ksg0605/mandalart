$(document).ready(function () {
  $(document).scrollTop(0);
  var sub = $("#cell1, #cell2, #cell3, #cell4, #cell5, #cell6, #cell7, #cell8");
  sub.css("opacity", "0");
  //$("input[name='main").css()
  var position = new Object();
  position.top = "50%";
  position.left = "50%";

  $(".start").click(function () {
    $("html, body").animate(
      { scrollTop: $("#main").offset().top - $(window).height() / 4 },
      500
    );
  });

  $("#main td textarea").click(function (event) {
    switch (true) {
      case $(event.target).is("#first"):
        $("#cell1").css("opacity", "1");
        $("html, body").animate(
          { scrollTop: $("#cell1").offset().top - $(window).height() / 4 },
          500
        );
        break;

      case $(event.target).is("#second"):
        $("#cell2").css("opacity", "1");
        $("html, body").animate(
          { scrollTop: $("#cell2").offset().top - $(window).height() / 4 },
          500
        );
        break;

      case $(event.target).is("#third"):
        $("#cell3").css("opacity", "1");
        $("html, body").animate(
          { scrollTop: $("#cell3").offset().top - $(window).height() / 4 },
          500
        );
        break;

      case $(event.target).is("#fourth"):
        $("#cell4").css("opacity", "1");
        $("html, body").animate(
          { scrollTop: $("#cell4").offset().top - $(window).height() / 4 },
          500
        );
        break;

      case $(event.target).is("#goal"):
        $("html, body").animate(
          { scrollTop: $("#main").offset().top - $(window).height() / 4 },
          500
        );
        break;

      case $(event.target).is("#fifth"):
        $("#cell5").css("opacity", "1");
        $("html, body").animate(
          { scrollTop: $("#cell5").offset().top - $(window).height() / 4 },
          500
        );
        break;

      case $(event.target).is("#sixth"):
        $("#cell6").css("opacity", "1");
        $("html, body").animate(
          { scrollTop: $("#cell6").offset().top - $(window).height() / 4 },
          500
        );
        break;

      case $(event.target).is("#seventh"):
        $("#cell7").css("opacity", "1");
        $("html, body").animate(
          { scrollTop: $("#cell7").offset().top - $(window).height() / 4 },
          500
        );
        break;

      case $(event.target).is("#eighth"):
        $("#cell8").css("opacity", "1");
        $("html, body").animate(
          { scrollTop: $("#cell8").offset().top - $(window).height() / 4 },
          500
        );
        break;
    }
  });
  // if($(event.target).is('#first')) {
  //    $('#cell1').css('opacity', '1');
  //    $("html, body").animate({scrollTop: ($("#cell1").offset().top) - $(window).height()/4},500);
  // }
  // else

  $("#minimize").click(function () {
    $("html, body").animate(
      { scrollTop: $("#main").offset().top - $(window).height() / 4 },
      500
    );
    sub.css("opacity", "0");
  });
  $("#maximize").click(function () {
    $("html, body").animate(
      { scrollTop: $("#main").offset().top - $(window).height() / 4 },
      500
    );
    sub.css("opacity", "1");
  });

  $("#reset").click(function () {
    $("html, body").find("textarea").val("");
  });

  //close button
  $(".btn-xs").hover(
    function () {
      $(this).css("opacity", "1");
    },
    function () {
      $(this).css("opacity", "0");
    }
  );
  //close & delete
  $(".btn-xs").click(function (event) {
    if ($(this).is("#close-btn")) {
      $(event.target).closest("table").css("opacity", "0");
    } else if ($(this).is("#delete-btn")) {
      $(event.target).closest("table").find('textarea[type="text"]').val("");
    }
  });

  //screen capture
  $("#button").on("click", function () {
    html2canvas($(".container-fluid"), {
      onrendered: function (canvas) {
        //$(".modal-content").appendChild(canvas);
        //},
        //var img = canvas.toDataURL('image/png');
        //이거랑 다운로드랑 한 세트
        var img = document.createElement("a");
        img.href = canvas.toDataURL();

        $("#savedimg").attr("src", img.href);
        $("#myModal").modal("show");

        //download
        $("#download").click(function () {
          img.download = "mandart.png";
          img.click();
        });
      },
    });
  });

  //clone value to empty cell
  //live display
  var subgoal1 = document.getElementById("first");
  subgoal1.onkeyup = function () {
    document.getElementById("p1").innerHTML = subgoal1.value;
  };
  var subgoal2 = document.getElementById("second");
  subgoal2.onkeyup = function () {
    document.getElementById("p2").innerHTML = subgoal2.value;
  };
  var subgoal3 = document.getElementById("third");
  subgoal3.onkeyup = function () {
    document.getElementById("p3").innerHTML = subgoal3.value;
  };
  var subgoal4 = document.getElementById("fourth");
  subgoal4.onkeyup = function () {
    document.getElementById("p4").innerHTML = subgoal4.value;
  };
  var subgoal5 = document.getElementById("fifth");
  subgoal5.onkeyup = function () {
    document.getElementById("p5").innerHTML = subgoal5.value;
  };
  var subgoal6 = document.getElementById("sixth");
  subgoal6.onkeyup = function () {
    document.getElementById("p6").innerHTML = subgoal6.value;
  };
  var subgoal7 = document.getElementById("seventh");
  subgoal7.onkeyup = function () {
    document.getElementById("p7").innerHTML = subgoal7.value;
  };
  var subgoal8 = document.getElementById("eighth");
  subgoal8.onkeyup = function () {
    document.getElementById("p8").innerHTML = subgoal8.value;
  };
});
