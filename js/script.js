$(document).ready(function(){
    
    $(".button").click(function(){
        var value = $(this).attr("data-filter");

        if (value == "Todo" || value == "VerProductos") {
            $(".filter").show("1000");
            $(".inicio-container").fadeOut("slow"); 
        } else if (value == "Home") {
            $(".filter").hide("1000");
            $(".inicio-container").fadeIn("slow"); 
        } else {
            $(".filter").not("." + value).hide("10000");
            $(".filter").filter("." + value).show("10000");
            $(".inicio-container").fadeOut("slow"); 
        }

        
        $(this).addClass('active').siblings().removeClass('active');

      
        if ($(this).attr("data-filter") !== "Login") {
            $("#loginForm").fadeOut("slow");
        }
    });
   
    $("#verProductos").click(function(){
        $(".button[data-filter='Todo']").click(); 
    });
    
    $(".filter").hide();

    $("#loginForm").hide(); 

    $(".button[data-filter='Login']").click(function(){
        $("#loginForm").fadeIn("slow"); 
    });
});
