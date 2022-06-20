(function($) {
  "use strict"; // Start of use strict
    
  // Smooth scrolling using jQuery easing
  $('.service-header-block').click(function() {
      
      var $id = this.id;
      
      if($id === 'service-1-body'){
         var $relatedComponent = $("#service-1-content");
         if($relatedComponent.hasClass("service-content-show")){
             $relatedComponent.removeClass("service-content-show");
         }else{
             var $currentActiveComponent = $(".service-content-show");
             $currentActiveComponent.removeClass("service-content-show");
             $relatedComponent.addClass("service-content-show");
         }
      } else if($id === 'service-2-body'){
         var $relatedComponent = $("#service-2-content");
         if($relatedComponent.hasClass("service-content-show")){
             $relatedComponent.removeClass("service-content-show");
         }else{
             var $currentActiveComponent = $(".service-content-show");
             $currentActiveComponent.removeClass("service-content-show");
             $relatedComponent.addClass("service-content-show");
         }
      } else if($id === 'service-3-body'){
         var $relatedComponent = $("#service-3-content");
         if($relatedComponent.hasClass("service-content-show")){
             $relatedComponent.removeClass("service-content-show");
         }else{
             var $currentActiveComponent = $(".service-content-show");
             $currentActiveComponent.removeClass("service-content-show");
             $relatedComponent.addClass("service-content-show");
         }
      } else if($id === 'service-4-body'){
         var $relatedComponent = $("#service-4-content");
         if($relatedComponent.hasClass("service-content-show")){
             $relatedComponent.removeClass("service-content-show");
         }else{
             var $currentActiveComponent = $(".service-content-show");
             $currentActiveComponent.removeClass("service-content-show");
             $relatedComponent.addClass("service-content-show");
         }
      }
    
  });

})(jQuery);