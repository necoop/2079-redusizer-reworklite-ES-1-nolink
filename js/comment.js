$(".reviews__inner").on("submit", sendFakeForm);

function sendFakeForm(e) {
  e.preventDefault();
  $(".send__box").slideUp(500);
  $(".comment-loading").css("display", "block");

  setTimeout(() => {
    $(".comment-loading").slideUp(600);
  }, 4000);
  setTimeout(() => {
    $(".comment-success").css('opacity', '1');
  }, 4900);
}