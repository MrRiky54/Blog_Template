var changeTextSize = function(mode, elem) {

  var currentPixelString = $(elem).css("font-size");
  var currentPixel = currentPixelString.substring(0, 2);
  var current = parseInt(currentPixel);

  if (mode === "minus") {

    var size = current - 1;
    $(elem).css("font-size", size + "px");

  } else if (mode === "plus"){

    var size = current + 1;
    $(elem).css("font-size", size + "px");

  } else {

    return current;

  }
};

var colors = ["orangered", "olivedrab", "grey"];

$(document).ready(function() {

  $(".dot").click(function() {
    $(".button_container").slideToggle();
  });

  $(".normal-text").click(function() {
    $(".article p").css("font-size", "16px");
  });

  $(".small-text").click(function() {
    changeTextSize("minus", ".article p");
  });

  $(".big-text").click(function() {
    changeTextSize("plus", ".article p");
  });

  $(".button").css("background-color", colors[0]);
  $(".menu").css("background-color", colors[0]);
  $(".change-color").css("background-color", colors[1]);

  current = 0;

  $(".change-color").click(function() {
    if (current === (colors.length - 2)) {
      current += 1;
      $(".button").css("background-color", colors[current]);
      $(".menu").css("background-color", colors[current]);
      $(".change-color").css("background-color", colors[0]);
    } else if (current < colors.length) {
      current += 1;
      $(".button").css("background-color", colors[current]);
      $(".menu").css("background-color", colors[current]);
      $(".change-color").css("background-color", colors[current + 1]);
    } else {
      current = 0;
      $(".button").css("background-color", colors[current]);
      $(".menu").css("background-color", colors[current]);
      $(".change-color").css("background-color", colors[current + 1]);
    }
  });

  $(".change-color").dblclick(function() {
    var color = prompt("Write the code or name of the color you want. [The code must start with #]");
    $(".button").css("background-color", color);
    $(".menu").css("background-color", color);
  });

});
