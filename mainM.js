function cambioDeColor(color_aleatorio){
    var elem = document.getElementById('title-M');
    elem.style.color = color_aleatorio;

}

$(document).ready(function(){
    $('#FotoUno').mouseenter(function(){
        $('#FotoUno').css({'width':'300px','height':'auto'});
        $('#Nosotros').show(function(){
            $('#Nosotros').text('LK comenzó en 2014, con el objetivo de lograr un medio de comunicación audiovisual en el cual hablemos todo sobre sneakers.');
        });
        $('#Nosotros2').show(function(){
            $('#Nosotros2').text('Además de esto buscamos promover el contenido orgánico, creando lazos con marcas deportivas, artistas, músicos,');
        });
        $('#Nosotros3').show(function(){
            $('#Nosotros3').text('deportistas, creadores, fotógrafos y todas las personas que puedan aportar algo a Legendary Kicks.');
        });
        $('#Nosotros').show(function(){
            $('#Nosotro4').text('Legendary Kicks es una plataforma digital que pertenece a Legend Media.');
        });
    });
    $('#FotoUno').mouseleave(function(){
        $('#FotoUno').css({'width':'200px','height':'auto'});
        $('#Nosotros').hide();
        $('#Nosotros2').hide();
        $('#Nosotros3').hide();
        $('#Nosotros4').hide();

    });

    $('#redes').click(function(){
        url = "https://www.instagram.com/legendary_mx/";
        $(location).prop('href',url);
    })
});

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML = '<img src = "tennis2.png">';
      this.responseText;
    }
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
}