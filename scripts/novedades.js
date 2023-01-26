



$(document).ready(function(){


    

//-- CAMBIAMOS LOS ENLACES ESCRITOS POR ENLACES HREF --    
    
    
    
    
function replaceURLWithHTMLLinks(e){
    return e.replace(/(\(.*?)?\b((?:https?|ftp|file):\/\/[-a-z0-9+&@#\/%?=~_()|!:,.;]*[-a-z0-9+&@#\/%=~_()|])/gi,function(e,r,n){var t="";r=r||"";for(var a=/\(/g;a.exec(r);){var l;(l=/(.*)(\.\).*)/.exec(n)||/(.*)(\).*)/.exec(n))&&(n=l[1],t=l[2]+t)}return r+"<a href='"+n+"' target='_blank' rel='nofollow noopener'>"+n+"</a>"+t})
}
let targTexto_novedad_original = document.querySelector('.cinterno-mensage-publicado p');  
targTexto_novedad_original.innerHTML=replaceURLWithHTMLLinks(targTexto_novedad_original.innerHTML)


    
    
//-- TITULO DE LA PAGINA --    
    
    
    
    
let titulo = document.querySelector('head title');
titulo.innerHTML = document.querySelector('.logo-header .nombre-vidbit p').textContent+' - Novedades';
    
    

    
//-- TERMINA TITULO DE LA PAGINA --       
//-- SECCION DE LAS VARIABLES --
    
    
    
    
var contenedor = document.querySelector('.body-novedades');
var cont_boton_crear_novedad = document.querySelector('.contenedor-novedades .boton-crear-novedad');
var boton_crear_novedad = document.querySelector('.contenedor-novedades .boton-crear-novedad .bonton label');
var input_boton_crear_novedad = document.querySelector('.contenedor-novedades .boton-crear-novedad .bonton input');

    
var targeta = document.querySelector('.targeta-mensage-novedad');
var faltanL;
    faltanL = 5000;

    
var contenido_rellenar;
    contenido_rellenar = `

        <div class="targeta-mensage-novedad edicion">
            <div class="c-fecha-publicado">
                <div class="cinterno-fecha-publicado">
                    <p></p>
                </div>
                <div class="eliminar-targeta">
                    <label class="icon-cancel-circled"></label>
                </div>
            </div>
            <div class="c-mensage-publicado">
                <div class="cinterno-mensage-publicado">


                    <div class="relleno-de-campos">
                        <textarea class="input-mensage" placeholder="Escribir" maxlength="`+faltanL+`"></textarea>
                        <div class="contador-letras">
                            <div class="cint-contador-letras">
                                <p>0</p>
                            </div>
                        </div>
                    </div> 


                </div>
            </div>
            <div class="c-multimedia-publicado">
                <div class="cinterno-multimedia-publicado">
                    <div class="relleno-de-campos">


                        <div class="set-imagen-url">

                            <div class="input-imagen">
                                <div class="contenedor-texto">
                                    <input class="imagen-url" type="url" placeholder="Insertar imagen">
                                </div>    
                                <div class="contenedor-borrar-texto">
                                    <label class="icon-cancel-circled"></label>
                                </div>
                            </div>    
                            <div class="enviar-imagen">
                                <p>Ver</p>
                            </div>

                        </div>   
                        <div class="mostrar-imagen">
                            <img class="muestra" src="">
                        </div>
                        <div class="realizar-publicacion">
                            <div class="boton">
                                <p>Publicar</p>
                            </div>
                        </div>


                    </div>    
                </div>
            </div>
        </div> 
    `;

var contenido_relleno;
    contenido_relleno = `

        <div class="targeta-mensage-novedad">
            <div class="c-fecha-publicado">
                <div class="cinterno-fecha-publicado">
                    <p></p>
                </div>
            </div>
            <div class="c-mensage-publicado">
                <div class="cinterno-mensage-publicado">
                    <p></p>
                </div>
            </div>
            <div class="c-multimedia-publicado">
                <div class="cinterno-multimedia-publicado">
                    <div class="video-imagen">
                        <img src="">
                    </div>
                </div>
            </div>
        </div>           

    `;

  
        
    
    
    
    
//-- TERMINA SECCION DE LAS VARIABLES --
//-- SECCION DE LAS FUNCIONES -- 
    
    
    
    
function conteo_letras_faltante(){
    
    
    
    
       let faltanLconteo = faltanL - $('.relleno-de-campos textarea').val().length;
       if (faltanLconteo < 0) {
           
           
           faltanLconteo = 0;
           
           
       }
       $('.relleno-de-campos .contador-letras .cint-contador-letras p').text(faltanLconteo);
    
    
    
    
}    
    
    
    
    
function agregarNovedad(){
    
    
    
    
    //-- VARIABLES DE LA PUBLICACION EN EDICION -- 
    
    
    
    
    let targeta_edicion = document.querySelector('.targeta-mensage-novedad.edicion');
    let tiempo_targeta = document.querySelector('.targeta-mensage-novedad .c-fecha-publicado .cinterno-fecha-publicado p');
    let texto_novedad = document.querySelector('.relleno-de-campos .input-mensage');  
    let texto_novedad_original = document.querySelector('.cinterno-mensage-publicado p');  
    let imagen_url = document.querySelector('.targeta-mensage-novedad .relleno-de-campos .set-imagen-url .input-imagen .contenedor-texto .imagen-url');
    let borrar = document.querySelector('.input-imagen .contenedor-borrar-texto label');
    let enviar_url = document.querySelector('.set-imagen-url .enviar-imagen');    
    let imagen = document.querySelector('.relleno-de-campos .muestra');
    let imagen_original = document.querySelector('.c-multimedia-publicado .video-imagen img');
    let publicar = document.querySelector('.realizar-publicacion .boton'); 
    let eliminar = document.querySelector('.targeta-mensage-novedad.edicion .eliminar-targeta label');
    let primerElem = contenedor.firstElementChild;
    let content_multimedia = document.querySelector('.targeta-mensage-novedad .c-multimedia-publicado');
    let content_mensaje = document.querySelector('.targeta-mensage-novedad .c-mensage-publicado');
    
    
    
    //-- TERMINA VARIABLES DE LA PUBLICACION EN EDICION -- 
    //-- BOTONES DE LA PUBLICACION EN EDICION -- 
    
    
    $(eliminar).click(function(){
        
        
        $(primerElem).remove();
        contenedor.removeChild(targeta_edicion);
        $(input_boton_crear_novedad).attr('nochecked', 'true');
        $(input_boton_crear_novedad).removeAttr('checked', 'true');
        
        
    });
    
    $(borrar).click(function(){
        
        
        imagen_url.value = '';
        
        
    });
    
    function filename_all_src(){
        let filepath = imagen_url.value;
        let group = filepath.split("/");
        let filenameWithExtension = group;  
        return filenameWithExtension;
    };
    
    $(enviar_url).click(function(){
        
        
        
        

        
        imagen.src = imagen_url.value;
        imagen_original.src = imagen.src;
        
        
        
        
    });
    
    function borrarEnviarImagen(){
        
        
        if(imagen_url.value === ''){
            
            
            imagen.src = '';
            imagen_original.src = imagen.src;
            
            
        }
        
        
    };
    
    
    
    //-- TERMINA BOTONES DE LA PUBLICACION EN EDICION -- 
    //-- TEXTO DE LA PUBLICACION EN EDICION -- 
    
    
    
    
    function procesarTextoNovedadFunctionHtml(){
        
        
        
        
            $(texto_novedad_original).html( $(texto_novedad).val().replace(/[^0-9a-zA-ZñÑáéíóúÁÉÍÓÚ.()/::?¿¡!=+*#$%&*,@ _-]/g || /[\n]/g, '' || "<br>" ));
            tiempo_targeta.textContent = tiempo();
        
        
        
        
    }
    
    
    
    
    texto_novedad.addEventListener('keyup',procesarTextoNovedadFunctionHtml);
    texto_novedad.addEventListener('keyup',conteo_letras_faltante);
    
    texto_novedad.addEventListener('keydown',procesarTextoNovedadFunctionHtml);
    texto_novedad.addEventListener('keydown',conteo_letras_faltante);
    
    texto_novedad.addEventListener('mousedown',procesarTextoNovedadFunctionHtml);
    texto_novedad.addEventListener('mousedown',conteo_letras_faltante);
    
    targeta_edicion.addEventListener('mousemove',procesarTextoNovedadFunctionHtml);
    targeta_edicion.addEventListener('mousemove',borrarEnviarImagen);
    targeta_edicion.addEventListener('mousemove',conteo_letras_faltante);
    
    
    
    
    //-- TERMINA TEXTO DE LA PUBLICACION EN EDICION -- 
    //-- BOTON PARA PUBLICAR --     
    
    

    
    
    $(publicar).click(function(){
        $('.body-novedades').addClass('text2url');



        
        //*** PUBLICACION CON SOLO IMAGEN
        
        if((texto_novedad_original.textContent === '') && ((filename_all_src()[0] === 'file:') || (filename_all_src()[0] === 'https:') || (filename_all_src()[0] === 'http:')) && ((imagen.src === imagen_url.value ) || (imagen_url.value === imagen.src))){
            
            
            if(filename_all_src().length > 1){
            
                
                contenedor.removeChild(targeta_edicion);
                $(input_boton_crear_novedad).attr('nochecked', 'true');
                $(input_boton_crear_novedad).removeAttr('checked', 'true');
                primerElem.removeChild(content_mensaje);
                $(primerElem).removeClass('ejecutando-edicion');
                $(primerElem).addClass("publicacion-solo-imagen");
                
                
            }
            else{
                
                
                imagen_url.value = '';
                imagen_url.placeholder = 'Enlace de imagen incorrecto!';
                $(targeta_edicion).on('mousemove', function(){

                    imagen_url.placeholder = 'Insertar imagen';

                });
                
                
            }
            
        }
        
        //*** PUBLICACION SIN TEXTO O SIN IMAGEN
        
        else if((texto_novedad_original.textContent === '') && ((imagen_url.value === '') || (imagen.src === ''))){
            
            
            texto_novedad.placeholder = 'Antes necesitas rellenar este campo!';
            imagen_url.placeholder = 'O rellenar este otro!';
            $(targeta_edicion).on('mousemove', function(){
                
                
                texto_novedad.placeholder = 'Escribir';
                imagen_url.placeholder = 'Insertar imagen';
                
                
            });
            
            
        }
        
        //*** PUBLICACION CON SOLO TEXTO
        
        else if((texto_novedad_original.textContent !== -1) && ((imagen.src === '' ) || (imagen_url.value === ''))){
            
            
            contenedor.removeChild(targeta_edicion);
            $(input_boton_crear_novedad).attr('nochecked', 'true');
            $(input_boton_crear_novedad).removeAttr('checked', 'true');
            primerElem.removeChild(content_multimedia);
            $(primerElem).removeClass('ejecutando-edicion');
            $(primerElem).addClass("publicacion-solo-texto");
            
            
        }
        
        //*** PUBLICACION CON TEXTO E IMAGEN
        
        else if((texto_novedad_original.textContent !== -1) && ((filename_all_src()[0] === 'file:') || (filename_all_src()[0] === 'https:') || (filename_all_src()[0] === 'http:')) && ((imagen.src === imagen_url.value ) || (imagen_url.value === imagen.src))){
            
            
            if(filename_all_src().length > 1){
                
                
                contenedor.removeChild(targeta_edicion);
                $(input_boton_crear_novedad).attr('nochecked', 'true');
                $(input_boton_crear_novedad).removeAttr('checked', 'true');
                $(primerElem).removeClass('ejecutando-edicion');
                
                
            }
            else{
                
                
                imagen_url.value = '';
                imagen_url.placeholder = 'Enlace de imagen incorrecto!';
                $(targeta_edicion).on('mousemove', function(){

                    imagen_url.placeholder = 'Insertar imagen';

                });
                
                
            }
            
            
        }
        else if((texto_novedad_original.textContent !== -1) && ((imagen_url.value.length < 10) || (filename_all_src().length <= 4))){
            
            
                imagen_url.value = '';
                imagen_url.placeholder = 'Enlace de imagen incorrecto!';
                $(targeta_edicion).on('mousemove', function(){

                    imagen_url.placeholder = 'Insertar imagen';

                });
            
            
        }
        
        //*** SIN NINGUNA CONDICION FUNCIONANDO  
        
        else{
            
        }
        
        
        
        
        //** CAMBIAMOS LOS ENLACES ESCRITOS POR ENLACES HREF   
        
        texto_novedad_original.innerHTML=replaceURLWithHTMLLinks(texto_novedad_original.innerHTML)
        
        
        
        
    });
    
    
    
    
    //-- TERMINA BOTON PARA PUBLICAR -- 
    
    
    
    
};

    


//-- TERMINA SECCION DE LAS FUNCIONES -- 
//-- SECCION DE LAS ACIONES DEL CODIGO --     
    //-- ATRIBUTO <<NOCHECKED>> A INPUT -- 
    
    
    
    
$(input_boton_crear_novedad).attr('nochecked', 'true');
    
    
    

    //-- TERMINA ATRIBUTO <<NOCHECKED>> A INPUT --     
    //-- BOTONES DE LA PUBLICACION EN EDICION --     
    
    
    
    
$(boton_crear_novedad).click(function(){
    
    
    
    
    if(input_boton_crear_novedad.getAttribute('nochecked')){
        
        
        $(contenedor).prepend(contenido_relleno,contenido_rellenar);
        agregarNovedad();
        let primerElem = contenedor.firstElementChild;
        $(primerElem).addClass('ejecutando-edicion');
        
        
       }
    
    
    
    $(input_boton_crear_novedad).attr('checked', 'true');
    $(input_boton_crear_novedad).removeAttr('nochecked', 'true');
    conteo_letras_faltante();
     
    
    
    
});
    
  
    
  
    //-- TERMINA BOTONES DE LA PUBLICACION EN EDICION --    
//-- TERMINA SECCION DE LAS ACIONES DEL CODIGO --
    
    
    
    
});










