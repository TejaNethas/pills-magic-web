$(document).ready(function(){
	var navHeight=$('nav').height();
	$('body').css({'padding-top':navHeight+35+'px'});

        $('[data-toggle="popover"]').popover({ trigger: "hover" });
                    $('#datetimepicker1, #datetimepicker2, #datetimepicker3').datetimepicker({
                        minDate:new Date(),
                        format: 'MM/DD/YYYY'
        });

	 $(".ripple-effect").click(function(e){
        var rippler = $(this);

        // create .ink element if it doesn't exist
        if(rippler.find(".ink").length == 0) {
            rippler.append("<span class='ink'></span>");
        }

        var ink = rippler.find(".ink");

        // prevent quick double clicks
        ink.removeClass("animate");

        // set .ink diametr
        if(!ink.height() && !ink.width())
        {
            var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            ink.css({height: d, width: d});
        }

        // get click coordinates
        var x = e.pageX - rippler.offset().left - ink.width()/2;
        var y = e.pageY - rippler.offset().top - ink.height()/2;

        // set .ink position and add class .animate
        ink.css({
          top: y+'px',
          left:x+'px'
        }).addClass("animate");
    });

 
         $('#post-event-1').click(function(){
                validatePostEvent1Form();
            });

             function validatePostEvent1Form(){
      
        var con_per_phonenum = /[0-9]{10}/;
        var con_per_phone = $("#p-contactNumber").val();
    
      
        /*c p user phone number*/
        if (con_per_phone == " "){
            $("#p-contactNumber").removeClass('greenborder').addClass('redborder');
             alert('phone number data is empty');
        } 
        else if(!(con_per_phonenum.test(con_per_phone))){
             $("#p-contactNumber").removeClass('greenborder').addClass('redborder');
              alert('phone number data not valid');
        }
        else{
            $("#p-contactNumber").removeClass('redborder').addClass('greenborder');
            alert('phone number data valid');
        }
      


    }


});

/*  Ripple-effect animation */
