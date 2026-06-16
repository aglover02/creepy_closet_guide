$(document).ready(function () {
  $("#styleQuiz").on("submit", function (event) {
    let isValid = true;

    $(".error-message").text("");

    if ($("#userName").val().trim() === "") {
      $("#userName").next(".error-message").text("Please enter your name.");
      isValid = false;
    }

    if ($("#styleVibe").val() === "") {
      $("#styleVibe").next(".error-message").text("Please choose a style vibe.");
      isValid = false;
    }

    if ($("#occasion").val() === "") {
      $("#occasion").next(".error-message").text("Please choose an occasion.");
      isValid = false;
    }

    if ($("#comfortPriority").val() === "") {
      $("#comfortPriority").next(".error-message").text("Please choose a comfort priority.");
      isValid = false;
    }

    if ($("#favoritePiece").val().trim() === "") {
      $("#favoritePiece").next(".error-message").text("Please enter a favorite clothing piece.");
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
    }
  });
});