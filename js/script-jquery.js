
$(window).on('load', function(){
    
    let currIndice = 0;
    let maxIndice = $('.img-box img').length
    let delay = 4000;
    let timer ;

    initSlider();
    clickBullets();
    function initSlider(){
        for(let i = 0; i < maxIndice; i++){
            if( i == 0){
                $('.bullets-box').append('<span style="background: #ff0000;"></span>')
            }else{
                $('.bullets-box').append('<span></span>')
            }
        }
        $('.img-box img').eq(0).stop().fadeIn();
      timer =  setInterval(function(){
            changeSlider();
        },delay);

    };

     //  clickBullets:
     function clickBullets(){
        $('.bullets-box span').click(function(){
         $('.img-box img').eq(currIndice).stop().fadeOut(2000); 
         currIndice = $(this).index();
         $('.img-box img').eq(currIndice).stop().fadeIn(2000); 
         $('.bullets-box span').css('background','#807d7dcc');
         $(this).css('background','#ff0000');

            clearInterval(timer);  
            setInterval(function(){
                changeSlider();
            },9000)

        });
     };

    function changeSlider(){
        $('.img-box img').eq(currIndice).stop().fadeOut(2000);
        currIndice++;
        if(currIndice == maxIndice)
        currIndice = 0;
        $('.bullets-box span').css('background','#807d7dcc');
        $('.img-box img').eq(currIndice).stop().fadeIn(2000);  
        $('.bullets-box span').eq(currIndice).css('background','#ff0000');   
    };



    
});