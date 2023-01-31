// ====== testimonial slider

$(function(){
    $('.test_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:false,
        arrows:false,
       
      });

      // logo_slider js

      $('.logo_slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:false,
        arrows:false,
       
      });

      // counter  js 
      $(window).on("load resize",function() {

        var counters = $(".count");
        var countersQuantity = counters.length;
        var counter = [];
      
        for (i = 0; i < countersQuantity; i++) {
          counter[i] = parseInt(counters[i].innerHTML);
        }
      
        var count = function(start, value, id) {
          var localStart = start;
          setInterval(function() {
            if (localStart < value) {
              localStart++;
              counters[id].innerHTML = localStart;
            }
          },4);
        }
      
        for (j = 0; j < countersQuantity; j++) {
          count(0, counter[j], j);
        }
      });
});
 
                  
   