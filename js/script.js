let current_fs, next_fs, previous_fs;
let animating = false;

$(".next").click(function () {
  if (animating) return false;
  animating = true;
  current_fs = $(this).parent();
  next_fs = current_fs.next();
  current_fs.css({ transform: "scale(1)" });
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  next_fs.show();
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        let scale = 1 - now * 0.2;
        let opacity = 1 - now;
        current_fs.css({
          transform: `scale(${scale})`,
          position: "absolute",
        });
        next_fs.css({opacity: opacity.toString() });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      easing: "easeInOutBack",
    }
  );
});

$(".previous").click(function () {
  if (animating) return false;
  animating = true;
  current_fs = $(this).parent();
  previous_fs = current_fs.prev();
  current_fs.css({ transform: "scale(1)" });
  $("#progressbar li")
    .eq($("fieldset").index(current_fs))
    .removeClass("active");
  previous_fs.show();
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        let scale = 0.8 + (1 - now) * 0.2;
        let opacity = 1 - now;
        current_fs.css({
          transform: `scale(${scale})`,
          position: "absolute",
        });
        previous_fs.css({opacity: opacity.toString() });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      easing: "easeInOutBack",
    }
  );
});
