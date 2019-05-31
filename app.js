// A $( document ).ready() block.
$( document ).ready(function() {
    $(".card a").click(function(event){
        //var pos = $('#cantidad').position();
       // alert(pos.top);
       var clicado = $(this).parents('.card');
       //cardaren momentuko zaballuze eta posizioa jaso

       //ezarri cardari
       //position fixed
       //z-index 100 jarri navaren aurretik joateko

       //carrito botoiarenak jaso

        $(this).parents('.card').animate({
                position:'abosolute',
                opacity: 0.4,
                borderColor: "red",
                borderWidth: "10px",
                left: '+=50px'
                //left: $('#cantidad').position().left,
                //top: $('#cantidad').position().top
              }, 5500
        );
    });
});