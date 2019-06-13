// A $( document ).ready() block.
$(document).ready(function () {
    $(".card a").click(function (event) {
        //var pos = $('#cantidad').position();
        // alert(pos.top);
        var card_clicado = $(this).parents('.card');
        //cardaren momentuko zaballuze eta posizioa jaso
        var ancho = card_clicado.width();
        var alto = card_clicado.height();
        var posicion_card = card_clicado.position();

        //ezarri cardari

        //position fixed
        card_clicado.css('position', 'fixed');
        card_clicado.width(ancho);
        card_clicado.height(alto);
        //z-index 100 jarri navaren aurretik joateko

        //carrito botoiaren posizioa jaso
        var posicion_carrito = $('#cantidad').position();

        card_clicado.animate({
            opacity: 0.1,
            left: posicion_carrito.left,
            top: posicion_carrito.top,
            width: 1,
            height: 1,
            borderRadius: 50
        }, 1000);
        card_clicado.hide(1000);
        $('#cantidad').animate({
            opacity: 0
        }, 1000, function () {
            $('#cantidad').text(parseInt($('#cantidad').text()) + 1);
        }).animate({
            opacity: 1
        }, 200);

       

        


    });
});