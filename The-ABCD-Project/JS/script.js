
$(document).ready(function(){
    //for keyboard events, keydown is preferred over keypress
   $(document).on('keydown',function myFunction(event){
    var char = event.which || event.keyCode;

    var howler_ok = new Howl({
        src: ['alphabet-sounds/ok.ogg'],
        volume: 0.8
    });

    var howler_A = new Howl({
        src: ['alphabet-sounds/a.ogg'],
        volume: 0.8
    });

    var howler_B = new Howl({
        src: ['alphabet-sounds/b.ogg'],
        volume: 0.8
    });

    var howler_C = new Howl({
        src: ['alphabet-sounds/c.ogg'],
        volume: 0.8
    });

    var howler_D = new Howl({
        src: ['alphabet-sounds/d.ogg'],
        volume: 0.8
    });

    var howler_E = new Howl({
        src: ['alphabet-sounds/e.ogg'],
        volume: 0.8
    });

    var howler_F = new Howl({
        src: ['alphabet-sounds/f.ogg'],
        volume: 0.8
    });

    var howler_G = new Howl({
        src: ['alphabet-sounds/g.ogg'],
        volume: 0.8
    });

    var howler_H = new Howl({
        src: ['alphabet-sounds/h.ogg'],
        volume: 0.8
    });

    var howler_I = new Howl({
        src: ['alphabet-sounds/i.ogg'],
        volume: 0.8
    });
    
    
       if(char === 65){
        $('.alphabetSection').fadeIn(5000, function(){
            $(this).removeClass('f g h i e b c d esc');
            $(this).addClass('a');
            
        });
         $('.forSection').fadeIn(500);
         $('.imageSection').removeClass('f-img g-img h-img i-img e-img b-img c-img d-img esc');
         $('.imageSection').addClass('a-img');
         howler_A.play();
       }
       else if(char === 66){
        $('.alphabetSection').fadeIn(5000, function(){
            $(this).removeClass('f g h i  a c d e esc');
            $(this).addClass('b');
        });
         $('.forSection').fadeIn(500);
         $('.imageSection').removeClass('f-img g-img h-img i-img e-img a-img c-img d-img esc');
         $('.imageSection').addClass('b-img');                                         // f g h i f-img g-img h-img i-img
         howler_B.play();
       }
       if(char === 67){
        $('.alphabetSection').fadeIn(5000, function(){
            $(this).removeClass('f g h i e b a d esc');
            $(this).addClass('c');
        });
         $('.forSection').fadeIn(500);
         $('.imageSection').removeClass('f-img g-img h-img i-img e-img b-img a-img d-img esc');
         $('.imageSection').addClass('c-img');
         howler_C.play();
       }
       if(char === 68){
        $('.alphabetSection').fadeIn(5000, function(){
            $(this).removeClass('f g h i e b c a esc');
            $(this).addClass('d');
        });
         $('.forSection').fadeIn(500);
         $('.imageSection').removeClass('f-img g-img h-img i-img e-img b-img a-img c-img esc');
         $('.imageSection').addClass('d-img');
         howler_D.play();
       }
       if(char === 69){
        $('.alphabetSection').fadeIn(5000, function(){
            $(this).removeClass('f g h i d b c a esc');
            $(this).addClass('e');
        });
         $('.forSection').fadeIn(500);
         $('.imageSection').removeClass('f-img g-img h-img i-img b-img a-img c-img d-img esc');
         $('.imageSection').addClass('e-img');
         howler_E.play();
       }
       if(char === 70){
        $('.alphabetSection').fadeIn(5000, function(){
            $(this).removeClass(' g h i e d b c a esc');
            $(this).addClass('f');
        });
         $('.forSection').fadeIn(500);
         $('.imageSection').removeClass(' g-img h-img i-img e-img b-img a-img c-img d-img esc');
         $('.imageSection').addClass('f-img');
         howler_F.play();
       }

       if(char === 71){
        $('.alphabetSection').fadeIn(5000, function(){
            $(this).removeClass('h i f e d b c a esc');
            $(this).addClass('g');
        });
         $('.forSection').fadeIn(500);
         $('.imageSection').removeClass('h-img i-img f-img e-img b-img a-img c-img d-img esc');
         $('.imageSection').addClass('g-img');
         howler_G.play();
       }

       if(char === 72){
        $('.alphabetSection').fadeIn(5000, function(){
            $(this).removeClass('i g f e d b c a esc');
            $(this).addClass('h');
        });
         $('.forSection').fadeIn(500);
         $('.imageSection').removeClass('i-img g-img f-img e-img b-img a-img c-img d-img esc');
         $('.imageSection').addClass('h-img');
         howler_H.play();
       }

       if(char === 73){
        $('.alphabetSection').fadeIn(5000, function(){
            $(this).removeClass('h g f e d b c a esc');
            $(this).addClass('i');
        });
         $('.forSection').fadeIn(500);
         $('.imageSection').removeClass('h-img g-img f-img e-img b-img a-img c-img d-img esc');
         $('.imageSection').addClass('i-img');
         howler_I.play();
       }


       if(char === 27){
        $('.alphabetSection').fadeIn(5000, function(){
            $(this).removeClass('b d c a');
            $(this).addClass('esc');
        });
         $('.forSection').fadeOut(200);
         $('.imageSection').removeClass('b-img a-img c-img d-img');
         $('.imageSection').addClass('esc');
         howler_ok.play();
       }      
   });

});




