









$(document).ready(function(){
    
    
    
    
    //TITULO DEL DOCUMENTO---------------------------------------------------------
    
    function documento_titulo(){
        
        let titulo = document.querySelector('head title');
        let usuario_nombre = document.querySelector('#user-name p');
        let usuario_apodo = document.querySelector('#user-nickname p');
        let tag_usuarioApodo = document.querySelector('#user-nickname');
        let pagina = document.querySelector('header .nombre-vidbit p');
        let logourl = document.querySelector('#user-logo');
        let logo = $('.cinterno-logo img , .ctiinterno-logo img').attr('src', ''+logourl.src+'');
        let video_username = $('.ctvideo .informacion .ctint-nombre-usuario p');
        
        $(tag_usuarioApodo).attr("name", usuario_apodo.textContent);
        $(video_username).text(usuario_apodo.textContent);
        titulo.innerHTML += tag_usuarioApodo.getAttribute('name') + ' (' + usuario_nombre.textContent + ') - ' + pagina.textContent;
    }
    
    documento_titulo();
    
    //TERMINA TITULO DEL DOCUMENTO-------------------------------------------------
    
    
    
    
    
    //CONTADOR DE PUBLICACIONES Y BITQIUS---------------------------------------
    
    function conteo_publicaciones(){
        
        let usuario_publicaciones = document.querySelector("#user-posts p.numero-post");
        let usuario_bitqius = document.querySelector("#user-BitQius p.numero-post");
        let numero_video = $(".cvsubidos").children().children().length;
        let numero_bitqius = $(".cbitqius").children().children().length;
        let numero_publicaciones = $(".cpublicaciones").children().children(".ctposts").length;
        
        usuario_publicaciones.textContent = numero_publicaciones + numero_video;
        usuario_bitqius.textContent = numero_bitqius;
        
    };
    conteo_publicaciones();
    
    //TERMINA CONTADOR DE PUBLICACIONES Y SEGUIDORES------------------------------
    
    
    
    
    
    //BOTON SEGUIDORES------------------------------------------------------------
    
    function nuevo_seguidor(){
        
        let conteo = 0;
        let boton_seguir_usuario = document.querySelector("#user-follow");
        let icon_seguir_usuario = document.querySelector("#user-follow label");
        let numero_seguidores = document.querySelector("#user-nfollowers p.numero-post");
        
        
        
        $(boton_seguir_usuario).click(function(){
    
            
            if(this.getAttribute('follower-state') === 'no-following'){
                $(icon_seguir_usuario).removeClass();
                $(icon_seguir_usuario).addClass("icon-ok-circled");
                $(boton_seguir_usuario).addClass("following");
                $(this).attr('follower-state', 'following');
                
                function updateDisplay(val) {
                    numero_seguidores.innerHTML = val;
                };
                updateDisplay(++conteo);
                
                
            }
            else{
                $(boton_seguir_usuario).removeClass("following");
                $(icon_seguir_usuario).removeClass();
                $(icon_seguir_usuario).addClass("icon-user-plus");
                $(this).attr('follower-state', 'no-following');
                
                function updateDisplay(val) {
                    numero_seguidores.innerHTML = val;
                };
                updateDisplay(--conteo);
                
                
            }
            
            
        });
        
        
        
    };
    nuevo_seguidor();
    
    //TERMINA BOTON SEGUIDORES---------------------------------------------------
    
    
    
    
    
    //FUNCIONAMIENTO DEL SLIDE-----------------------------------------------------
    
    function slide_perfil(){

        let slideAv =[  "sp" , "sv" , "sl" , "sg" , "sb" ];
        let deco_signal = ".deco-signal";
        let contenedor_slide = ".contenido-slide-canal";


        $('.cbmseccion.cbmsec-publicaciones').click(function(){
            $(contenedor_slide).removeClass(slideAv);
            $(deco_signal).removeClass(slideAv);

        });
        
        
        $('.cbmseccion.cbmsec-videos').click(function(){
            $(contenedor_slide).removeClass(slideAv);
            $(contenedor_slide).addClass('sv');
            $(contenedor_slide).addClass('sp');
            
            
            $(deco_signal).removeClass(slideAv);
            $(deco_signal).addClass('sv');

        });
        

        $('.cbmseccion.cbmsec-listas').click(function(){
            $(contenedor_slide).removeClass(slideAv);
            $(contenedor_slide).addClass('sl');
            $(contenedor_slide).addClass('sp');
            
            
            $(deco_signal).removeClass(slideAv);
            $(deco_signal).addClass('sl');

        });


        $('.cbmseccion.cbmsec-guardados').click(function(){
            $(contenedor_slide).removeClass(slideAv);
            $(contenedor_slide).addClass('sg');
            $(contenedor_slide).addClass('sp');
            
            
            $(deco_signal).removeClass(slideAv);
            $(deco_signal).addClass('sg');

        });


        $('.cbmseccion.cbmsec-bitqius').click(function(){
            $(contenedor_slide).removeClass(slideAv);
            $(contenedor_slide).addClass('sb');
            $(contenedor_slide).addClass('sp');
            
            
            $(deco_signal).removeClass(slideAv);
            $(deco_signal).addClass('sb');

        });

    };
    slide_perfil();
    
    //TERMINA FUNCIONAMIENTO DEL SLIDE---------------------------------------------
    
    
    
    
    
    //EFECTO PARALAX DEL BANNER DEL USUARIO----------------------------------------
    
    /*
    $(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.2);// regula el tiempo de cuan rapido bajara la imagen 
		$('.banner-imagen .contenedor-imagen img').css({
			'top': posicion + 'px',
		});
 
	});
    */
    
    //TERMINA EFECTO PARALAX DEL BANNER DEL USUARIO--------------------------------   
    
    
    
    
    
    //FUNCIONAMIENTO DEL MOSTRADOR-------------------------------------------------
    
    function sampleComponents(a,b,c,d){
        
        
        
        
        
        let contenedor_principal = document.querySelector(a);
        let cerrar = document.querySelector(b);
        let globalImg = document.querySelectorAll(c);
        let mostrador = document.querySelector(d);
        
        
        
        
        
        const actividad = function(){
            let boton_selected = this;
            let boton_etiqueta = boton_selected.tagName;
            let bodyHidden = function(){
                $("body").css({'overflow': "hidden",});
            };
            let bodyShow = function(){
                $("body").css({'overflow': "auto",});
            };
            const sampleNone = function(){
                $(contenedor_principal).css({'display': "none",});
            };
            let sampleShow = function(){
                $(contenedor_principal).css({'display': "inline-block",});
            };
            let stateNoActive = function(){
                $(contenedor_principal).attr('state-component', 'no-active');
            };
            let stateActive = function(){
                $(contenedor_principal).attr('state-component', 'active');
            };
            
            
            
            
            
            if(boton_etiqueta === "IMG"){
                
                let imagenUrl = boton_selected.getAttribute("src");
                let forImagen = `<img src="`+ imagenUrl +`">`;
                mostrador.innerHTML = forImagen;
                
            }
            else if(boton_etiqueta === "DIV"){
                //BUSCAMOS SI EL ELEMENTO TIENE ALGUNA IMAGEN
                let hijos = boton_selected.hasChildNodes("img");
                //EN CASO DE TENERLO INGRESAMOS A LA ESTRUCTURA DE LA IMAGEN
                let get_hijos = $(boton_selected).find("img");
                //ACCEDEMOS A LA RUTA DE LA IMAGEN
                let imagenUrl = $(get_hijos)[0].getAttribute("src");
                //SI EL ELEMENTO TIENE UN ELEMENTO IMAGEN Y SU RUTA
                if((hijos === true) && (imagenUrl !== "")){
                    let forImagen = `<img src="`+ imagenUrl +`">`;
                    /*mostrador.innerHTML = forImagen;*/
                }
            }
            else{
                
            };
            
            
            
            
            
            if(contenedor_principal.getAttribute("state-component") === "active"){
                //SI ESTA ACTIVO...
                //OCULTAMOS EL SCROLL
                bodyHidden();
                
                //EJECUTAMOS AL DARLE CLICK PARA SALIR
                $(cerrar).click(function(){
                   
                    //OCULTAMOS LA MUESTRA
                    sampleNone();
                    //MOSTRAMOS EL SCROLL
                    bodyShow();
                    //DESACTIVAMOS LA MUESTRA
                    stateNoActive();
                    //LIMPIAMOS EL MOSTRADOR
                    mostrador.innerHTML = '';

                });
            }
            else{
                //DE NO ESTAR ACTIVO...
                //ACTIVAMOS LA MUESTRA
                stateActive();
                //MOSTRAMOS LA MUESTRA
                sampleShow();
                //OCULTAMOS EL SCROLL
                bodyHidden();
                
                
                
                //EJECUTAMOS AL DARLE CLICK PARA SALIR-----------------------------
                $(cerrar).click(function(){
                   
                    //OCULTAMOS LA MUESTRA
                    sampleNone();
                    //MOSTRAMOS EL SCROLL
                    bodyShow();
                    //DESACTIVAMOS LA MUESTRA
                    stateNoActive();
                    //LIMPIAMOS EL MOSTRADOR
                    mostrador.innerHTML = '';

                });
            }
            
            
            
            
            
        };
        actividad();
        
        
        //---------- ACTIVACION DE LA FUNCION 
    
    
        for( i = 0; i < globalImg.length; i++ ){
            
            globalImg[i].addEventListener("click", actividad);
            
        }


        //---------- TERMINA ACTIVACION DE LA FUNCION ==========
        
        
        
    };
    /*sampleComponents(".sample-components", ".contenedor-close", ".visualizar", ".mostrador");*/
    
    //TERMINA FUNCIONAMIENTO DEL MOSTRADOR-----------------------------------------
    
    
    
    
});




