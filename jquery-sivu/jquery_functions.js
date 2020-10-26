// THIS IS A FILE FOR JQUERY FUNCTIONS ONLY

// DOCUMENT READY FUNCTION 
$(function(){

    // Harjoitus 1
        $("#aika-btn").on("click", function(){
            $("#otsikko").text(Date());
    });

    // Harjoitus 2
        $("#nayta-btn").on("click", function(){
            $("#otsikko").show("slow");
        });

        $("#piilota-btn").on("click", function(){
            $("#otsikko").hide("slow");
        });

        $("#toggle-btn").on("click", function(){
            $("#otsikko").toggle("slow");
        });

    // Harjoitus 3
    $("#vari-btn").on({ 
        dblclick: function() {
            if ($("body").css("background-color") == "rgb(25, 26, 25)") {
                $("body").css("background-color", "rgb(51, 51, 68)");
                $("#otsikko").css("color", "red");
            } else {
                $("body").css("background-color", "rgb(25, 26, 25)");
                $("#otsikko").css("color", "white");
            }
        }
    });

    // #333 rgb(25, 26, 25)
    // #334 rgb(51, 51, 68)

    // Harjoitus 4
    $("#hover-btn").on({
        mouseenter: function() {
            $(this).text("Hovered");
        },

        mouseleave: function() {
            $(this).text("Hover");
        }
    });

    // Harjoitus 5
    $("#piilotus-btn").on({
        mouseenter: function() {
            $(this).text("");
        },

        mouseleave: function() {
            $(this).text("Tekstit piiloon/näkyville");
        }
    });

    // Harjoitus 6
    $("#hymynaama").on({
        mouseenter: function() {
            $(this).attr("src", "../img/hymynaamat/sad.png");
        },

        mouseleave: function() {
            $(this).attr("src", "../img/hymynaamat/happy.png");
        }
    });

    // Harjoitus 7
    $("#vaihda-btn").on({
        click: function(color) {
            function color() {
                return $("#input-1").val();
            };
            $("#input-1").css("color", color);
            $("#input-1").css("font-weight", "bold");
        }
    });

    $("#input-1").on({
        change: function(color) {
            function color() {
                return $("#input-1").val();
            };
            $("#input-1").css("color", color);
            $("#input-1").css("font-weight", "bold");
        }
    });

    // Harjoitus 8
    $("#lisaa-btn").on("click", function(){
        $("#hymynaama").show("fast");
    });

    $("#poista-btn").on("click", function(){
        $("#hymynaama").hide("fast");
    });

    // Harjoitus 9
    $("#input-2").on("dblclick", function(){
        $(this).css("background-color", "yellow");
    });
});
