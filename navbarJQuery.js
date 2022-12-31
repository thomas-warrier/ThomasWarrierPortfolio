$(document).ready(function () {

    $(".navbar-scroll").hide(); //Hide the navigation bar first

    $(window).scroll(function () {  //Listen for the window's scroll event
        
        if (isScrolledAfterElement(".timeline-wrapper")) { //if it has scrolled beyond the #content elment
            $('.navbar-scroll').fadeIn("slow");  //Show the navigation bar
            
            
        } else {
            $('.navbar-scroll').fadeOut("fast"); //Else hide it
        }
    });

    //Function that returns true if the window has scrolled beyond the given element
    function isScrolledAfterElement(elem) {
        let $elem = $(elem);
        let $window = $(window);

        let docViewTop = $window.scrollTop();
        let docViewBottom = docViewTop + $window.height();

        let elemTop = $elem.offset().top;

        return elemTop <= docViewBottom;
    }

   

});

