
$(document).ready(function(){
   $(document).on('keypress',function myFunction(event){
    var char = event.which || event.keyCode;
    
       if(char === 65){
        $('.alphabetSection').fadeIn(5000, function(){
            $(this).addClass('a');
        });
         $('.forSection').fadeIn(500);
         $('.imageSection').addClass('a-img');
       }
       else if(char === 66){
        $('.alphabetSection').fadeIn(5000, function(){
            $(this).addClass('b');
        });
         $('.forSection').fadeIn(500);
         $('.imageSection').addClass('b-img');
       }
       if(char === 67){
        $('.alphabetSection').fadeIn(5000, function(){
            $(this).addClass('c');
        });
         $('.forSection').fadeIn(500);
         $('.imageSection').addClass('c-img');
       }
       if(char === 68){
        $('.alphabetSection').fadeIn(5000, function(){
            $(this).addClass('d');
        });
         $('.forSection').fadeIn(500);
         $('.imageSection').addClass('d-img');
       }
       if(char === 27){
        $('.alphabetSection').fadeIn(5000, function(){
            $(this).addClass('esc');
        });
         $('.forSection').fadeIn(500);
         $('.imageSection').addClass('esc');
       }      
   });

});




