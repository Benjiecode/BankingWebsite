$(document).ready(function () {
  $(".accordion-header").on("click", function () {
    const $content = $(this).next(".accordion-content");

    $(".accordion-content").not($content).slideUp();

    $content.slideToggle();
  });
});
