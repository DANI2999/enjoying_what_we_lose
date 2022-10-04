setInterval(time_timer, 1000);

function time_timer() {
  var dt = new Date();

  var s = dt.getSeconds();
  var s_p = (s / 60) * 100 + "%";

  var m = dt.getMinutes();
  var m_p = (m / 60) * 100 + "%";

  var h = dt.getHours();
  var h_p = (h / 24) * 100 + "%";

  $(".hour").find("p").text(h);
  $(".minute").find("p").text(m);
  $(".second").find("p").text(s);

  TweenMax.to($(".second"), 0.5, {
    ease: Bounce.easeOut,
    width: s_p
  });
  TweenMax.to($(".minute"), 0.5, {
    ease: Bounce.easeOut,
    width: m_p
  });
  TweenMax.to($(".hour"), 0.5, {
    ease: Bounce.easeOut,
    width: h_p
  });
}
