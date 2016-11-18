$(document).ready(function(){
  $(".perf1").hover(function(){
    $(this).find('h1').toggle();

  $(this).find(".description").toggle();
  });
  $(".perf2").hover(function(){
    $(this).find('h1').toggle();
    $(this).find(".description").toggle();
  });

  $(".perf3").hover(function(){
    $(this).find('h1').toggle();
    $(this).find(".description").toggle();
  });

  $(".send").click(function(){
    var message = $("<h3>Welcome onboard</h3>");
    $(".newsletter").append(message);
    $(".send").remove();
    $(".email").remove();
  });
});