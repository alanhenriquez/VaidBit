

    //CODIGO GLOBAL TEMPORAL PARA INSERTAR LOS PUNTOS NESESARIOS-------------------

'use strict';
    
$('body').show(function () {
    let agregar = document.querySelector('body');
    agregar.innerHTML+= `<div class="nada"><div class="puntos"><p></p></div><div class="archivo"></div></div>`;
});






    //Detectamos la url y la dividimos guardandola como una cadena

    
    

    function generateDot(){
        
        
        
        function filename_all(){
            let filepath = document.location.href;
            let group = filepath.split("/");
            let filenameWithExtension = group;  
            return filenameWithExtension;

        };
        
        
        
        
        
        
        
        
        
        let puntos = document.querySelector('.nada .puntos p');
        puntos.innerHTML = '';
        
    
        //ESTIPULAMOS QUE DETECTE LOS ELEMENTOS Y RESUMA AL NUMERO NESESARIO
        
        
        
        let ultimonum = filename_all().length;
        let ultimo = ultimonum;
        let septimo = filename_all().indexOf('VaidBit');
        let real = (ultimo - septimo - 2);
        
        
      
        //GENERAMOS EL BUECLE DE LOS PUNTOS
        
        
        for(var i = 0; i < real; i++){
            puntos.innerHTML += ('../');
        }
        
        
        //COPIAMOS EL RESULTADO FINAL Y REGRESAMOS
        
        
        let puntitos = document.querySelector('.nada p').textContent;
        return puntitos;
        
        
                 

        

    };
    generateDot();
    
    


    //TERMINA CODIGO GLOBAL TEMPORAL PARA INSERTAR LOS PUNTOS NESESARIOS-----------



    //CODIGO PARA EL ICONO DE LA PAGINA--------------------------------------------




    (function() {
       
       
        var link_icon_web = document.querySelector("link[rel='shortcut icon']") || document.createElement('link');
        link_icon_web.type = 'image/x-icon';
        link_icon_web.rel = 'shortcut icon';
        link_icon_web.href = generateDot()+'Imagenes/Copia-de-VidBit-logo.png';
        document.getElementsByTagName('head')[0].appendChild(link_icon_web);
        
        
    })();




    //TERMINA CODIGO PARA EL ICONO DE LA PAGINA------------------------------------

    










var header = document.querySelector('header .header');

function cont_header_elem(){
    
    
    
    header.innerHTML = `

            <div class="contenedor-icono-y-el-menu">
                
                <input id="toggle" class="toggle-check" type="checkbox" nochecked>
                <label class="icon-menu-1" for="toggle"></label>
                <label class="container-menu-cerrar" for="toggle"></label>
                <div class="container-menu">
                    <div class="menu">
                        
                        
                        <div class="menu-logo">
                            
                            <div class="menu-logo-imagen">
                                <div class="logo">
                                    <img src="`+generateDot()+`Imagenes/Laptop%20mac%20con%20luces.jpg" alt="">
                                </div>
                            </div>
                            <div class="menu-logo-dec-1 dec-punto-menu"></div>
                            <div class="menu-logo-dec-2 dec-punto-menu"></div>
                            <div class="menu-logo-dec-3 dec-punto-menu"></div>
                            <div class="menu-logo-dec-4 dec-punto-menu"></div>
                            
                        </div>
                        <div class="menu-secciones-contenedor-scroll">
                            
                            
                            <div class="menu-secciones-contenedor-1">
                                
                                <div class="menu-secciones-global">
                                    
                                    <a href="">
                                        <div class="menu-secciones-contenedor">
                                            <div class="menu-secciones-icono">
                                                <div class="icono-seccion-videos">
                                                    <label class="icon-vaidbit"></label>
                                                </div>
                                            </div>
                                            <div class="menu-secciones-palabra">
                                                <div class="nombre-seccion-videos">
                                                    <p>VaidBit</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </a> 
                                    <a href="`+generateDot()+`index.html">
                                        <div class="menu-secciones-contenedor">
                                            <div class="menu-secciones-icono">
                                                <div class="icono-seccion-Home">
                                                    <label class="icon-home-1"></label>
                                                </div>
                                            </div>
                                            <div class="menu-secciones-palabra">
                                                <div class="nombre-seccion-Home">
                                                    <p>Home</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </a>  
                                    <a href="`+generateDot()+`servicios/categorias/categorias.html">
                                        <div class="menu-secciones-contenedor">
                                            <div class="menu-secciones-icono">
                                                <div class="icono-seccion-secciones">
                                                    <label class="icon-map"></label>
                                                </div>
                                            </div>
                                            <div class="menu-secciones-palabra">
                                                <div class="nombre-seccion-secciones">
                                                    <p>Categorias</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </a>  
                                    
                                </div> 
                            
                            </div>
                            <div class="menu-secciones-contenedor-2">
                                
                                <div class="menu-secciones-global">
                                    
                                    <a href="`+generateDot()+`servicios/novedades/novedades.html">
                                        <div class="menu-secciones-contenedor">
                                            <div class="menu-secciones-icono">
                                                <div class="icono-seccion-novedades">
                                                    <label class="icon-star-1"></label>
                                                </div>
                                            </div>
                                            <div class="menu-secciones-palabra">
                                                <div class="nombre-seccion-novedades">
                                                    <p>Novedades</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </a> 
                                    <a href="">
                                        <div class="menu-secciones-contenedor">
                                            <div class="menu-secciones-icono">
                                                <div class="icono-seccion-futuros-proyectos">
                                                    <label class="icon-coffee"></label>
                                                </div>
                                            </div>
                                            <div class="menu-secciones-palabra">
                                                <div class="nombre-seccion-futuros-proyectos">
                                                    <p>Futuros Proyectos</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </a>  
                                    
                                </div> 
                            
                            </div>
                            <div class="menu-secciones-contenedor-3">
                                
                                <div class="menu-secciones-global">
                                    
                                    <a href="">
                                        <div class="menu-secciones-contenedor">
                                            <div class="menu-secciones-icono">
                                                <div class="icono-seccion-configuracion">
                                                    <label class="icon-cog"></label>
                                                </div>
                                            </div>
                                            <div class="menu-secciones-palabra">
                                                <div class="nombre-seccion-configuracion">
                                                    <p>Configuración</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </a> 
                                    <a href="">
                                        <div class="menu-secciones-contenedor">
                                            <div class="menu-secciones-icono">
                                                <div class="icono-seccion-manual">
                                                    <label class="icon-book"></label>
                                                </div>
                                            </div>
                                            <div class="menu-secciones-palabra">
                                                <div class="nombre-seccion-manual">
                                                    <p>Manual VidBit</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </a> 
                                    <a href="">
                                        <div class="menu-secciones-contenedor">
                                            <div class="menu-secciones-icono">
                                                <div class="icono-seccion-contactanos">
                                                    <label class="icon-mail-1"></label>
                                                </div>
                                            </div>
                                            <div class="menu-secciones-palabra">
                                                <div class="nombre-seccion-contactanos">
                                                    <p>Contactanos</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </a> 
                                    
                                </div>    
                                
                            </div>
                            <div class="menu-secciones-contenedor-4">
                                
                                <div class="menu-secciones-global">
                                    <a href="">
                                        <div class="menu-secciones-contenedor">
                                            <div class="menu-secciones-icono">
                                                <div class="icono-seccion-publicitate">
                                                    <label class="icon-rocket"></label>
                                                </div>
                                            </div>
                                            <div class="menu-secciones-palabra">
                                                <div class="nombre-seccion-publicitate">
                                                    <p>Publicítate ahora</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </a> 
                                </div>    
                                
                            </div>
                            <div class="menu-secciones-contenedor-info-extra">
                                
                                <div class="menu-secciones-global">
                                    
                                    <a href="">
                                        <div class="menu-secciones-contenedor">
                                            <div class="menu-secciones-palabra">
                                                <div class="nombre-quienes-somos">
                                                    <p>Quienes Somos?</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </a>  
                                    <a href="">
                                        <div class="menu-secciones-contenedor">
                                            <div class="menu-secciones-palabra">
                                                <div class="nombre-preguntas-frecuentes">
                                                    <p>Preguntas Frecuentes</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </a>   
                                    <a href="">
                                        <div class="menu-secciones-contenedor">
                                            <div class="menu-secciones-palabra">
                                                <div class="nombre-derechos-de-autor">
                                                    <p>Derechos de Autor</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </a>   
                                    <a href="">
                                        <div class="menu-secciones-contenedor">
                                            <div class="menu-secciones-palabra">
                                                <div class="nombre-politica-de-uso">
                                                    <p>Politica de Uso</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </a>   
                                    <a href="">
                                        <div class="menu-secciones-contenedor">
                                            <div class="menu-secciones-palabra">
                                                <div class="nombre-politica-de-seguridad">
                                                    <p>Politica de Seguridad</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            
                            </div>
                            <div class="menu-secciones-contenedor-footer">
                                
                                <div class="menu-secciones-global">
                                    <div class="menu-secciones-contenedor">
                                        <div class="menu-secciones-palabra">
                                            <div class="nombre-derecho-reservado">
                                                <a href="`+generateDot()+`index.html">
                                                    <p>©VaidBit 2020.</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                            
                        </div>
                        
                        
                    </div>
                </div>
                
            
            </div>
            <div class="logo-header">
                
                <a href="`+generateDot()+`index.html">
                    <div class="Logo-vidbit">
                        <img src="`+generateDot()+`Imagenes/Copia-de-VidBit-logo.png" alt="">
                    </div>
                    <div class="nombre-vidbit">
                        <p>VaidBit</p>
                        <a href="`+generateDot()+`servicios/categorias/categorias.html">
                            <div class="letras-region">
                                <p>sv</p>
                            </div>
                        </a>
                    </div>
                </a>
                
            </div>
            <div class="header-top"></div>
            <div class="head-menu-cuenta">
                
                <div class="head-menu-usuario head-menu-usuario-1">
                    
                    <input id="toogle-menu-usuario" type="checkbox" nochecked>
                    <div class="icono-usuario-imagen">
                    
                        <label class="icon-user-circle usuario-head" for="toogle-menu-usuario">
                            <div class="usuario-imagen">
                                <img src="`+generateDot()+`Imagenes/Laptop%20mac%20con%20luces.jpg" alt="">
                            </div>
                        </label>
                        
                    </div>
                    <label class="icono-usuario-contenedor-exterior-cerrar" for="toogle-menu-usuario"></label>
                    <div class="icono-usuario-contenedor-exterior">
                        
                        <div class="contenedor-head-menu-cuenta">
                            <div class="contenedor-imagen-banner">
                                <img src="`+generateDot()+`Imagenes/fondos/general/cartas-navidenas.jpg" alt="">
                                <div class="contenedor-imagen-banner-mensaje">
                                    <p>- Feliz Navidad -</p>
                                </div>
                            </div>
                        </div>
                        <div class="menu-secciones-contenedor-scroll">
                            
                            <div class="hmut-contenedor-1">
                                <div class="menu-secciones-global">
                                
                                    <a href="`+generateDot()+`usuarios/perfil-00/usuario-00.html">
                                        <div class="menu-secciones-contenedor">
                                            <div class="menu-secciones-icono">
                                                <div class="icono-seccion-tu-canal">
                                                    <label class="icon-user-circle-o"></label>
                                                </div>
                                            </div>
                                            <div class="menu-secciones-palabra">
                                                <div class="nombre-seccion-tu-canal">
                                                    <p>Tu Canal</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </a> 
                                    <a href="">
                                        <div class="menu-secciones-contenedor">
                                            <div class="menu-secciones-icono">
                                                <div class="icono-seccion-manual-usuario">
                                                    <label class="icon-book"></label>
                                                </div>
                                            </div>
                                            <div class="menu-secciones-palabra">
                                                <div class="nombre-seccion-manual-usuario">
                                                    <p>Manual de Usuario</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </a>  
                                    <a href="">
                                        <div class="menu-secciones-contenedor">
                                            <div class="menu-secciones-icono">
                                                <div class="icono-seccion-tus-testimonios">
                                                    <label class="icon-id-card"></label>
                                                </div>
                                            </div>
                                            <div class="menu-secciones-palabra">
                                                <div class="nombre-seccion-tus-testimonios">
                                                    <p>Tus Testimonios</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </a>  
                                    
                                </div>
                            </div>
                            <div class="hmut-contenedor-2">
                                <div class="menu-secciones-global">
                                
                                    <a href="">
                                        <div class="menu-secciones-contenedor">
                                            <div class="menu-secciones-icono">
                                                <div class="icono-seccion-ubicacion">
                                                    <label class="icon-location-1"></label>
                                                </div>
                                            </div>
                                            <div class="menu-secciones-palabra">
                                                <div class="nombre-seccion-ubicacion">
                                                    <p>Región de Plataforma</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </a> 
                                    
                                </div>
                            </div>
                            <div class="hmut-contenedor-3">
                                <div class="menu-secciones-global">
                                
                                    <a href="">
                                        <div class="menu-secciones-contenedor">
                                            <div class="menu-secciones-icono">
                                                <div class="icono-seccion-idiomas">
                                                    <label class="icon-globe-1"></label>
                                                </div>
                                            </div>
                                            <div class="menu-secciones-palabra">
                                                <div class="nombre-seccion-idiomas">
                                                    <p>Idiomas</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </a> 
                                    <a href="">
                                        <div class="menu-secciones-contenedor">
                                            <div class="menu-secciones-icono">
                                                <div class="icono-seccion-tipo-de-letra">
                                                    <label class="icon-language-1"></label>
                                                </div>
                                            </div>
                                            <div class="menu-secciones-palabra">
                                                <div class="nombre-seccion-tipo-de-letra">
                                                    <p>Tipo de Letra</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </a>  
                                    <a href="">
                                        <div class="menu-secciones-contenedor">
                                            <div class="menu-secciones-icono">
                                                <div class="icono-seccion-cambiar-tema-color">
                                                    <label class="icon-circle"></label>
                                                </div>
                                            </div>
                                            <div class="menu-secciones-palabra">
                                                <div class="nombre-seccion-cambiar-tema-color">
                                                    <p>Cambiar color</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </a>  
                                    
                                </div>
                            </div>
                            <div class="hmut-contenedor-4">
                                <div class="menu-secciones-global">
                                
                                    <a href="">
                                        <div class="menu-secciones-contenedor">
                                            <div class="menu-secciones-icono">
                                                <div class="icono-seccion-configuracion">
                                                    <label class="icon-cog"></label>
                                                </div>
                                            </div>
                                            <div class="menu-secciones-palabra">
                                                <div class="nombre-seccion-configuracion">
                                                    <p>Configuración</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </a> 
                                    
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                <div class="head-menu-usuario head-menu-usuario-2"></div>
                
            </div>
            <div class="search" id="search"></div>`;
};
cont_header_elem();

           
           
         
                  
                  
                  
                  

