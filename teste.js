//POP up de boas vindas
$(document).ready(function () {
    $("#popup").hide().fadeIn(1000);

    $("#close").on("click", function (e) {
        e.preventDefault();
        $("#popup").fadeOut(1000);
    });
});
