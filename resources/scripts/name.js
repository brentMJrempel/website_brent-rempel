$(function() {
    $(".name").on("mousedown mouseup", function() {
        $(this).toggleClass("name-mouse-down"); 
    });
})