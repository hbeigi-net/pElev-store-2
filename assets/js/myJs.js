$(document).ready(function () {
    $("body").click(function (e) { 
        
        $(".myDropdown").removeClass("myShow");
        $("#small_screen_navbar").removeClass("nav-show");
    });
    $(".drop-toggle").click(function (e) { 
        e.stopPropagation();
        $(".myDropdown").toggleClass("myShow");
        
    });
    $("#store_click").click(function (e) { 
        e.preventDefault();
        e.stopPropagation();
        $("#small_screen_mega_menu").addClass("mega-show");
        
    });
    $("#closer").click(function (e) { 
        e.preventDefault();
        e.stopPropagation();
        $("#small_screen_mega_menu").removeClass("mega-show");
    });
    $("#sth_lg_screen_tollger").click(function (e) { 
        e.preventDefault();
        e.stopPropagation();
        $("#small_screen_navbar").addClass("nav-show");
    });
    $("#sm_sc_nav_closer").click(function (e) { 
        e.preventDefault();
        $("#small_screen_navbar").removeClass("nav-show");
    });
    $("#small_screen_navbar").click(function (e) { 
        e.stopPropagation()
        
    });
});