$(document).ready(function(){
    $("form").submit(function(){
        var full_name = "<h2>" + $("form #fname").val() + " " + $("form #lname").val() +"</h2>";
        var description = "<p class='p-desc'>" + $("form #description").val()  +"</p>";
        var link = "<a href='#' class='btn'>Click for description!</a>"

        $(".cards").append("<div class='cards-single'>" + full_name + link + description +"</div");
        return false;
    });
    $(document).on("click", ".btn", function(){
        $(this).hide("slow");
        $(this).parent().children("h2").hide("slow");
        $(this).parent().children("p").show("slow");
    });
    $(document).on("click", ".p-desc", function(){
        $(this).hide("slow");
        $(this).parent().children("h2").show("slow");
        $(this).parent().children("a").show("slow");
    });
});