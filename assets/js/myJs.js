$(document).ready(function () {
    $("body").click(function (e) { 
        if($(".myDropdown").hasClass("myShow"))
            $(".myDropdown").removeClass("myShow");
    });
    $(".drop-toggle").click(function (e) { 
        e.stopPropagation();
        $(".myDropdown").toggleClass("myShow");
        
    });
    
});