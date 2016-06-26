$(function() {
    $("header h1.title, header span.arrow-down").click(function() {
        if ($("#wrapper").hasClass("stage-1"))
            $("#wrapper").removeClass();
        else
            $("#wrapper").addClass("stage-1");
    });

    $("nav.menu .arrow-up").click(function() {
        $("#wrapper").removeClass();
    });

    $("nav.menu .about-me-menu").click(function() {
        $("#wrapper").removeClass("play-game").addClass("stage-2 about-me");
    });

    $("nav.menu .play-game-menu").click(function() {
        $("#wrapper").removeClass("about-me").addClass("stage-2 play-game");
    });

    $("main .arrow-up").click(function() {
        $("#wrapper").removeClass("about-me play-game stage-2");
    })
});