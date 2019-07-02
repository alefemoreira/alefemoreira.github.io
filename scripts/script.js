jQuery(document).ready(function($) {
    $(".scroll").click(function(event){
        event.preventDefault();
        if (window.innerWidth <= 767.98)
            $('html,body').animate({scrollTop:$(this.hash).offset().top-115}, 600);
        else
            $('html,body').animate({scrollTop:$(this.hash).offset().top-65}, 600);
   });
});
