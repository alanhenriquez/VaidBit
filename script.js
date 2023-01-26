


function tiempo(){
    
    var meses_escritos = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var colocarmeses = meses_escritos;
    var year = new Date();     
    var month = new Date();   
    var day = new Date();        
    var hours = new Date();
    var minutes = new Date();
    var seconds = new Date();     
    var ampm = hours >= 12 ? 'a.m.' : 'p.m.';   
    year = year.getFullYear();
    month = month.getMonth();
    day = day.getDate();    
    hours = hours.getHours();   
    minutes = minutes.getMinutes();   
    seconds = seconds.getSeconds();    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;  
    
    //INCERTAR LA SIGUIENTE VARIABLE EN TU CODIGO
    ponertiempo = day + ' ' + colocarmeses[month] + ' ' + year + ' • ' + hours + ':' + minutes + ' ' + ampm;
    return ponertiempo;
    
}




/*
var n = document.querySelector('.index-banner-fondo');
n.innerHTML+= '<div class="banner-pantalla-imagen"><video></video></div>';




var video_list      = [

    "videos/video(1).mp4",

    
                            ];
        var video_index     = 0;
        var video_player    = null;

        function onload(){
            console.log("body loaded");
            video_player        = document.getElementById("idle_video");
            video_player.setAttribute("src", video_list[video_index]);
            video_player.play();
        }

        function onVideoEnded(){
            console.log("video ended");
            if(video_index < video_list.length - 1){
                video_index++;
            }
            else{
                video_index = 0;
            }
            video_player.setAttribute("src", video_list[video_index]);
            video_player.play();
        }

$('body').show(function(){
    $('body').attr('onload', 'onload();');
});
$('video').show(function(){
    $('video').removeAttr('controls');
    $('video').attr('src');
    $('video').attr('loop', 'true');
    $('video').attr('autoplay', 'true');
    $('video').attr('muted', 'true');
    $('video').attr('id', 'idle_video');
    $('video').attr('onended', 'onVideoEnded();');
});       

*/
            

    //EFECTO PARALAX DEL BANNER DEL USUARIO----------------------------------------
    
    $(window).scroll(function(){
		var barr = $(window).scrollTop();
		var posicin =  (barr * 0.5);/* regula el tiempo de cuan rapido bajara la imagen */
		$('.index-banner-fondo .banner-pantalla-imagen img , .index-banner-fondo .banner-pantalla-imagen video').css({
			'top': posicin + 'px',
		});
 
	});
    
    //TERMINA EFECTO PARALAX DEL BANNER DEL USUARIO--------------------------------  






