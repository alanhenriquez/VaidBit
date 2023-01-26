




    
    
    
    //---------- CODIGO PARA CAMBIAR LAS TILDES EN EL BUSCADOR 
    
    
    var normalizar = (function() {
        var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", 
            to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
            mapping = {};
 
        for(var i = 0, j = from.length; i < j; i++ )
            mapping[ from.charAt( i ) ] = to.charAt( i );
 
        return function( str ) {
            var ret = [];
            for( var i = 0, j = str.length; i < j; i++ ) {
            var c = str.charAt( i );
            if( mapping.hasOwnProperty( str.charAt( i ) ) )
              ret.push( mapping[ c ] );
            else
              ret.push( c );
            }return ret.join( '' )  
            
            /* SI LO NESESITAN PUEDEN CAMBIAR EL RETURN DE ARRIBA POR ESTE DE ABAJO
            
            return ret.join( '' ).replace( /[^-A-Za-z0-9]+/g, '-' ).toLowerCase(); 
            */
            
            ;}
 
    })();    
    
    
    //---------- TERMINAMOS CODIGO PARA CAMBIAR LAS TILDES EN EL BUSCADOR ==========
    
    
    
    
    
    //---------- CODIGO PARA ACEPTAR LAS TILDES EN EL BUSCADOR 
    
    
    var accent_map = {'Most':'a', 'é':'e', 'è':'e', 'í':'i','ó':'o','ú':'u','Á':'a', 'É':'e', 'è':'e', 'Í':'i','Ó':'o','Ú':'u'};
    
    function accent_fold (s) {
        if (!s) { return ''; }
        var ret = '';
        for (var i = 0; i < s.length; i++) {
            ret += accent_map[s.charAt(i)] || s.charAt(i);
        }
        return ret;
    };
    
    
    //---------- TERMINA CODIGO PARA ACEPTAR LAS TILDES EN EL BUSCADOR ==========
    
    
    
    
    
    //---------- CODIGO DE LA PANTALLA BUSCADOR   
    
    
    var busquedaPlaceholder = 'Buscar';
    var footerTag = document.querySelector('footer');
    var logo_usuario_main = document.querySelector('.container-menu .menu .menu-logo .menu-logo-imagen .logo img');
    logo_usuario_main = $(logo_usuario_main).attr('src');
    
    
    
    function pantalla_search(){
        
        footerTag.innerHTML += `


        <div class="contenedor-pie-de-pagina-fijo">
            
            <div class="contenedor-iconos-pie-de-pagina-fijo vficon00">
                <label class="footer-boton">
                    <div class="toggle" title="Modo clasico u obscuro" alt="Modo clasico u obscuro"></div>
                </label>
            </div>
            <div class="contenedor-iconos-pie-de-pagina-fijo vficon01">
                <label class="icon-search footer-busqueda" title="Buscador" alt="Buscador"></label>
            </div>
            <div class="contenedor-iconos-pie-de-pagina-fijo vficon02">
                <a href="`+generateDot()+`index.html">
                    <label class="icon-home-1 footer-home" title="Home" alt="Home"></label>
                </a>
            </div>
            <div class="contenedor-iconos-pie-de-pagina-fijo vficon03">
                <a href="">
                    <label class="icon-book-1 footer-manual" title="Manual VaidBit" alt="Manual VaidBit"></label>
                </a>
            </div>
            <div class="contenedor-iconos-pie-de-pagina-fijo vficon04">
                <a href="`+generateDot()+`usuarios/perfil-00/usuario-00.html">
                    
                    <div class="cficon-usuario">
                        <label class="icon-user-circle footer-usuario" title="Usuario" alt="Usuario"></label>
                    </div>    
                    <div class="usuario-imagen">
                        <img src="`+logo_usuario_main+`" title="alanhenriquez" alt="alanhenriquez">
                    </div>
                    
                </a>
            </div>
            
        </div>
        <div class="pantalla-display-buscador">
            <div class="display-buscador-header">
                <div class="icono-quitar-buscador">
                    <label class="icon-left-big quitar-buscador">
                    </label>
                </div>
                <div class="contenedor-buscador-footer">
                    <div class="header-top">
                        <div class="navegacion">
                            <input type="search" placeholder="`+busquedaPlaceholder+`" id="inputBusqueda">
                            <div class="boton-buscar">
                                <label class="icon-search">
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="display-buscador-body">
                <ul id="resultado"></ul>
            </div>
        </div>

        `;
        
        
    };
    pantalla_search();
    
    
    
    
    var boton_display_buscador = document.querySelector('label.footer-busqueda');
    var boton_ocultar_buscador = document.querySelector('.icono-quitar-buscador')
    var icon_ocultar_buscador = document.querySelector('.icono-quitar-buscador label')
    
    
    
     
    $(boton_display_buscador).click(function(){
        $('body').toggleClass('mostrar');
    });
    
    $(boton_ocultar_buscador).click(function(){
        $('body').removeClass('mostrar');
    });
    $(boton_ocultar_buscador).hover(function(){
        $(icon_ocultar_buscador).toggleClass('salir-icon');
    });
    
    
    //---------- TERMINA CODIGO DE LA PANTALLA BUSCADOR ==========
    
    
    
    
    
    //---------- CODIGO MODO DIA Y NOCHE     
    
    
    function day_mode_night(){

        
        //Generamos


        $('.footer-boton').click(function(){

                let noche = 'night';
                let nochev = 'active';
                sessionStorage.setItem("modo", noche);
                sessionStorage.setItem("modo_estado1", nochev);

            if($('body').hasClass('night')){

                $('body').removeClass('night');
                $('.toggle').removeClass('active');
                sessionStorage.removeItem("modo");
                sessionStorage.removeItem("modo_estado1");

            }
            else{

                $('body').addClass('night');
                $('.toggle').addClass('active');

            }

        });


        //Ejecutamos    


        let active_noche = sessionStorage.getItem("modo");
        let active_nochev = sessionStorage.getItem("modo_estado1");


        /*Mostrar datos almacenados*/      


        $('body').toggleClass(active_noche);
        $('.toggle').toggleClass(active_nochev);  


    };
    day_mode_night();
    
    
    //---------- TERMINA CODIGO MODO DIA Y NOCHE ==========    
    
    
    
    
    
    var busquedas_footer_value = document.querySelector('.pantalla-display-buscador #inputBusqueda');
    busquedas_footer_value.value = busquedas_footer_value.value;

    
    var cero = 0;
    const productos = [
    {enlace:'https://www.youtube.com/watch?v=24Zj0kM_ebE&list=PLxSyIYvXT5Gr0JAjm9x-DRECeqhZ3ItTg&index=569', nombre: 'Most Beautiful Music: "Last Journey" by Chris Egan & Trystan Francis', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=sb8F8ncbC8s&list=PLxSyIYvXT5Gr0JAjm9x-DRECeqhZ3ItTg&index=570', nombre: 'Most Beautiful Music: "Big Skies" by Really Slow Motion', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=24Zj0kM_ebE&list=PLxSyIYvXT5Gr0JAjm9x-DRECeqhZ3ItTg&index=569', nombre: 'Most Beautiful Music: "Last Journey" by Chris Egan & Trystan Francis', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=txX15ZijpDo&list=PLxSyIYvXT5Gr0JAjm9x-DRECeqhZ3ItTg&index=565', nombre: 'Across the Grasslands by Collision Music | Worlds Most Beautiful Uplifting Music', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=KQNdZPPyPlk&list=PLxSyIYvXT5Gr0JAjm9x-DRECeqhZ3ItTg&index=566', nombre: '"MY SACRIFICE WILL NOT BE FORGOTTEN" • by Brian Delgado', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=t42lcYWaca8&list=PLxSyIYvXT5Gr0JAjm9x-DRECeqhZ3ItTg&index=561', nombre: 'Nightcore - Back From The Dead', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=3NHBL90QN5g&list=RD3NHBL90QN5g&start_radio=1', nombre: '「Kirameki」Shigatsu wa Kimi no Uso Ending - Cover Español (Ver. Full)', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=1BmTfBFG8Z8&list=RD3NHBL90QN5g&index=2', nombre: 'Shigatsu wa Kimi no Uso Medley (Cover en Español)【David Delgado ft. Na Na】', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=49HwDMaqKyw&list=RD3NHBL90QN5g&index=3', nombre: 'Digimon Tri - Butterfly (Cover Español Latino) | Versión Grupal', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=qP2JTK6sLiw&list=RD3NHBL90QN5g&index=4', nombre: '「Getta Ban Ban」Pokemon XY Opening 3 (FULL) - Cover Español', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=iYFRx-ghe4o&list=RD3NHBL90QN5g&index=5', nombre: 'Pocket Monster (2019) OP | 1・2・3 / After the Rain | Cover Español ft. Hitomi Flor', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=hNT1MaUiv1U&list=RD3NHBL90QN5g&index=6', nombre: 'Peace Sign - Boku no Hero Academia Season 2 (Opening 2) | Cover Español', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=OJGkAqVqAUY&list=RD3NHBL90QN5g&index=7', nombre: 'Pokemon XYZ Opening Full (Cover en Español) David Delgado', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=tSLDC75BEpQ&list=RD3NHBL90QN5g&index=8', nombre: 'OPENING DIGIMON VERCION CON TODOS LOS ACTORES', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=7z4WJAEG3u8&list=PLxSyIYvXT5GoiK8FZcr1bOF_SCL_NFf3w&index=4&t=0s', nombre: 'Goblin Slayer OP - Rightfully / Mili', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=7TFIXOAC6xg&list=PLxSyIYvXT5GoiK8FZcr1bOF_SCL_NFf3w&index=4', nombre: '[MAD] Chain Chronicle - MY LIBERATION Opening Full', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=s1M3hzn_O3Q&list=PLxSyIYvXT5GoiK8FZcr1bOF_SCL_NFf3w&index=5', nombre: '『AMV』Overlord III OP Full ~ VORACITY', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=mU_YMw01R6Q&list=PLxSyIYvXT5GoiK8FZcr1bOF_SCL_NFf3w&index=11', nombre: 'Way Back Home', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=pjTj-_55WZ8&list=RDpjTj-_55WZ8&start_radio=1', nombre: 'Rudimental - These Days feat. Jess Glynne, Macklemore & Dan Caplen [Official Video]', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=PT2_F-1esPk', nombre: 'The Chainsmokers - Closer (Lyric) ft. Halsey', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=lu9Ylxc0IZM', nombre: 'Sabrina Carpenter - Looking at Me (Audio Only)', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=qcZ7e9EOQTY', nombre: 'Dua Lipa - Hallucinate (Official Music Video)', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=d5rdty7EXf0&list=RDd5rdty7EXf0&start_radio=1', nombre: 'Sabrina Carpenter - Let Me Move You (From the Netflix film Work It/Audio Only)', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=fxnfglTc_w0', nombre: 'Mark Petrie - A Rush Of Blood', id: cero++},
    
    {enlace:'../../../../guia_autoaprendizaje_estudiante_2do_bto_Sociales_f3_s10.pdf', nombre: 'guia_autoaprendizaje_estudiante_2do_bto_Sociales_f3_s10', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=NtzrLpxM298', nombre: 'Skillet -“Stars” (The Shack Version) [Official Music Video]', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=JsbqTHift_8', nombre: 'Skillet - Back From the Dead (Official Video)', id: cero++},
    
    {enlace:'https://www.youtube.com/channel/UCAnLJyjTg5la5qJuLkakQig', nombre: 'Larsavision Tv', id: cero++},
    
    {enlace:'https://www.hagamosnoticias.com/', nombre: 'Hagamos Noticias Mundo', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=9bljFUfIshM', nombre: 'Avicii - Sunset Jesus (Lyric Video)', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=Io0fBr1XBUA', nombre: 'The Chainsmokers - Dont Let Me Down (Official Video) ft. Daya', id: cero++},
    
    {enlace:'https://www.youtube.com/watch?v=JDglMK9sgIQ', nombre: 'Avicii - The Days (Lyric Video)', id: cero++},
    
    {enlace:'https://www.instagram.com/', nombre: 'Instagram', id: cero++},    
        
    {enlace:'https://www.youtube.com/watch?v=49BZ_35zrDQ&list=RDBF61BPPBdsQ&index=3', nombre: 'Diego Torres - Que No Me Pierda', id: cero++},   
        
    {enlace:'https://www.youtube.com/watch?v=ImX1AalXJbc&list=RDBF61BPPBdsQ&index=6', nombre: 'Diego Torres - Abriendo Caminos (Video Clip)', id: cero++},   
        
    {enlace:'https://www.youtube.com/watch?v=GiuabrUp8zM&list=RDGiuabrUp8zM&start_radio=1', nombre: 'Avicii - Trouble (Lyric Video)', id: cero++},    
        
    {enlace:'https://www.youtube.com/watch?v=450p7goxZqg&list=RDGiuabrUp8zM&index=7', nombre: 'John Legend - All of Me (Official Video)', id: cero++},  
        
    {enlace:'https://www.youtube.com/watch?v=ip4Q1pbrYDg&list=RDGiuabrUp8zM&index=9', nombre: 'Avicii - Broken Arrows', id: cero++},      
        
    {enlace:'https://www.youtube.com/watch?v=jVXauWq9Hwg&t=8s', nombre: 'Panic! At The Disco: Say Amen (Saturday Night) [OFFICIAL VIDEO]', id: cero++},  
        
    {enlace:'file:///Users/oscargiovannihenriquez/Desktop/Ahenter/Ahenter-Videos-html/00-Perfil-Videos/Raxu/Raxu-10-El-viento-y-el-aire.html', nombre: 'Raxu 1.0 El viento y el aire - VidBit', id: cero++},     
        
    {enlace:'../../Raxu-copia-de-seguridad/Certificados/Certificado%20de%20Mecanico%20Automotriz.pdf', nombre: 'Certificado Mecanico Automotriz', id: cero++},  
    
    {enlace:'https://www.youtube.com/watch?v=GGsuLVlLObc', nombre: 'Shut Up and Dance', id: cero++}, 
        
    {enlace:'https://www.youtube.com/watch?v=zGipbUYrUCQ', nombre: 'Good Time', id: cero++},    
        
    {enlace:'https://traduciresdescubrir.wordpress.com/2012/07/26/paises-y-abreviaturas/', nombre: 'Paises y abreviaturas - Traducir es descubrir', id: cero++},   
        
    {enlace:'https://www.youtube.com/watch?v=UojBaKX5Vz4&list=RDBF61BPPBdsQ&index=6', nombre: 'Eros Ramazzotti - La Cosa Mas Bella (Più Bella Cosa) (videoclip)', id: cero++},     
        
    {enlace:'https://www.youtube.com/watch?v=Z_4cIOO-HI4', nombre: 'In Spiritus by Danny Rayel | Most Emotional Epic Gregorian Chant Music', id: cero++},     
        
    {enlace:'https://www.youtube.com/watch?v=x5SHQShUSSI', nombre: 'Alvaro Soler - Volar (Lyric Video)', id: cero++},   
        
    {enlace:'https://www.unrealengine.com/en-US/', nombre: 'UNREAL ENGINE', id: cero++},  
        
    {enlace:generateDot()+'styles/Iconos/fontello-7c56770c/demo.html', nombre: 'Iconos demos', id: cero++},      
        
    {enlace:'https://www.youtube.com/watch?v=J3UXp9jIr-U', nombre: 'Marshmello - Here With Me Feat. CHVRCHES (Official Music Video)', id: cero++},         
        
    {enlace:'https://www.youtube.com/watch?v=A4_f74lD42A&list=RDA4_f74lD42A&index=1', nombre: 'Juanes - Odio Por Amor (MTV Unplugged) ', id: cero++},   
        
    {enlace:'https://www.youtube.com/watch?v=Cij71bcdr1I', nombre: 'Sie7e - Tengo Tu Love (Official CantoYo Video) ', id: cero++},    
        
    {enlace:'https://www.youtube.com/watch?v=voxgN3Dhjuo&list=RDA4_f74lD42A&index=19', nombre: 'Juanes - Me Enamora (Official Music Video)', id: cero++},      
        
    {enlace:'https://www.youtube.com/watch?v=GuZzuQvv7uc', nombre: 'Chayanne - Torero (Vídeo Oficial)', id: cero++},     
        
    {enlace:'https://www.youtube.com/watch?v=Z2BMBrCKMcY', nombre: 'Chayanne - Salomé', id: cero++},    
        
    {enlace:'https://www.youtube.com/watch?v=-zgDXIi1uYw', nombre: 'Bacilos - Caraluna (Official Music Video)', id: cero++},  
        
    {enlace:'https://www.youtube.com/watch?v=bCDIt50hRDs&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbAVMbCDIt50hRDs&start_radio=1', nombre: 'Fools Garden - Lemon Tree', id: cero++},   
        
    {enlace:'https://www.youtube.com/watch?v=2HCrpZDSSuY&list=RDviI8pHlo2pk&index=6', nombre: 'laurapausinitv - En cambio no', id: cero++},     
        
    {enlace:'https://www.youtube.com/watch?v=MrTz5xjmso4', nombre: 'Sean Kingston - Beautiful Girls', id: cero++},         
        
    {enlace:'https://www.youtube.com/watch?v=gsFC51W0PX8', nombre: 'Fleetwood Mac "Everywhere" performed by Rumours of Fleetwood Mac', id: cero++},   
        
    {enlace:'https://www.youtube.com/watch?v=ihE74nG8ioc&list=RDBF61BPPBdsQ&index=8', nombre: 'Juanes - Volverte A Ver (Official Music Video)', id: cero++},      
        
    {enlace:'https://www.youtube.com/watch?v=YXnjy5YlDwk', nombre: 'Marc Anthony - Vivir Mi Vida (Official Video)', id: cero++},    
        
    {enlace:'https://www.youtube.com/watch?v=x-0KoCAV4mc&list=RDaNduGDxv6yA&index=8', nombre: 'Río Roma - Mi Persona Favorita (Lyric Video)', id: cero++},  
        
    {enlace:'https://www.youtube.com/watch?v=_X3PPuF_yOE&list=RD_X3PPuF_yOE&start_radio=1&t=2', nombre: 'Río Roma - Me Cambiaste la Vida (Videoclip)', id: cero++},  
        
    {enlace:'https://www.youtube.com/watch?v=Nj2U6rhnucI', nombre: 'Dua Lipa - Break My Heart (Official Video)', id: cero++},  
        
    {enlace:'https://www.youtube.com/watch?v=00AhT7bSJX0', nombre: 'HRVY - Million Ways (Official Video)', id: cero++},    
        
    {enlace:'https://www.youtube.com/watch?v=uPHKkewD1G0', nombre: 'Daya - Sit Still, Look Pretty', id: cero++},
        
    {enlace:'https://www.youtube.com/watch?v=Ey_hgKCCYU4', nombre: 'Jonas Blue - Perfect Strangers ft. JP Cooper (Official Video)', id: cero++},  
        
    {enlace:'https://www.youtube.com/watch?v=5yXQJBU8A28', nombre: 'Jonas Blue - Fast Car ft. Dakota (Official Video)', id: cero++},  
        
    {enlace:'https://www.youtube.com/watch?v=btrzs54s1Rc', nombre: 'Jonas Blue - Rise ft. Jack & Jack (Official Video)', id: cero++}, 
        
    {enlace:'https://www.youtube.com/watch?v=RNfA-m4rA4Q&list=RD_X3PPuF_yOE&index=10', nombre: 'Por Eso Te Amo (Reempaque)', id: cero++},    
    
    {enlace:'https://www.youtube.com/watch?v=weGzdKxLzss&list=RD_X3PPuF_yOE&index=8', nombre: 'Reik - Noviembre Sin Ti (Video)', id: cero++},  
        
    {enlace:'https://www.youtube.com/watch?v=a7FdUd6ysL0&list=RD_X3PPuF_yOE&index=21', nombre: 'Río Roma - Al Fin Te Encontré (Video)', id: cero++},    
        
    {enlace:'https://www.youtube.com/watch?v=zjpSX6fCPDc&list=RD_X3PPuF_yOE&index=24', nombre: 'Reik - Inolvidable (Video)', id: cero++},    
        
    {enlace:'https://www.youtube.com/watch?v=8PSDk6-IjM8&list=RD_X3PPuF_yOE&index=27', nombre: 'Llorar (feat. Mario Domm)', id: cero++},   
        
    {enlace:'https://www.etnassoft.com/2011/03/03/eliminar-tildes-con-javascript/', nombre: 'Eliminar tildes, eñes y caracteres raros con Javascript', id: cero++},    
        
    {enlace:'https://www.youtube.com/watch?v=jlySoaI0DGI&list=RD_X3PPuF_yOE&index=12', nombre: 'Camila - Coleccionista De Canciones (Official Video)', id: cero++},    
        
    {enlace:'https://www.youtube.com/watch?v=6Bep1_ESDs8&list=RD_X3PPuF_yOE&index=14', nombre: 'Río Roma - Hoy Es un Buen Día', id: cero++},    
        
    {enlace:'https://www.youtube.com/watch?v=KYZlT2iYRh8&list=RD_X3PPuF_yOE&index=15', nombre: 'Chayanne - Un Siglo Sin Ti (Video Oficial)', id: cero++},  
        
    {enlace:'https://www.youtube.com/watch?v=54cCE5q2NEE', nombre: 'Jesse & Joy, Gente de Zona - 3 A.M. (Video Oficial)', id: cero++},   
        
    {enlace:'https://es.stackoverflow.com/questions/195813/c%C3%B3mo-ignorar-acentos-en-b%C3%BAsqueda-filtro-usando-javascript', nombre: 'Cómo ignorar acentos en búsqueda / filtro usando javascript?', id: cero++},    
        
    {enlace:'https://www.youtube.com/watch?v=qExd-3oCTl4&list=RD_X3PPuF_yOE&index=29', nombre: 'Carlos Baute - Colgando en tus manos (con Marta Sanchez)', id: cero++},
        
    {enlace:'https://www.youtube.com/watch?v=k5k2XVKxznc&list=RDk5k2XVKxznc&start_radio=1&t=2', nombre: 'La 5A Estación - Me Muero', id: cero++},    
        
    {enlace:'https://www.youtube.com/watch?v=LkBxcmxWKAA', nombre: 'Panic! At The Disco: Nicotine [OFFICIAL VIDEO]', id: cero++},     
        
    {enlace:'https://norfipc.com/codigos/convertir-direcciones-url-formato-texto-enlaces-con-javascript.php', nombre: 'Convertir direcciones URL en formato de texto en enlaces con JavaScript', id: cero++},   
        
    {enlace:'https://www.youtube.com/watch?v=mk10O26j5-k', nombre: 'Alex Ubago - Me muero por conocerte (Videoclip Oficial)', id: cero++},      
        
    {enlace:'https://www.youtube.com/watch?v=XCQK6LmhYqc&list=RDXCQK6LmhYqc&start_radio=1', nombre: 'Rita Ora - Let You Love Me [Official Video]', id: cero++},    
        
    {enlace:'https://www.youtube.com/watch?v=7TWzV05kQ4w&pbjreload=101', nombre: 'Reik - Ya Me Enteré (Official Video)', id: cero++},        
        
    {enlace:'https://www.youtube.com/watch?v=JkK8g6FMEXE&list=RD9BMwcO6_hyA&index=5', nombre: 'Aerosmith - I Dont Want to Miss a Thing (Official HD Video)', id: cero++},    
        
    {enlace:'https://www.youtube.com/watch?v=KrZHPOeOxQQ&list=RD9BMwcO6_hyA&index=6', nombre: 'Bon Jovi - You Give Love A Bad Name (Official Music Video)', id: cero++},        
        
    {enlace:'https://www.youtube.com/watch?v=zZyWxbojYH8', nombre: 'Fall Out Boy - The Young Blood Chronicles (Uncut Longform Video)', id: cero++},      
    
    {enlace:'https://www.youtube.com/watch?v=-rhpBInbPMY', nombre: 'Alex Ubago - Aunque no te pueda ver (videoclip oficial)', id: cero++},    
    
    {enlace:'https://www.youtube.com/watch?v=lDK9QqIzhwk&list=RD9BMwcO6_hyA&index=4', nombre: "Bon Jovi - Livin' On A Prayer (Official Music Video)", id: cero++},    
    
    {enlace:'https://www.youtube.com/watch?v=9BMwcO6_hyA&list=RD9BMwcO6_hyA&index=1', nombre: "Bon Jovi - Always (Official Music Video)", id: cero++},  
        
    {enlace:'https://www.youtube.com/watch?v=fRKg6QNLoYY', nombre: "Reik - Te Fuiste de Aquí (Video Oficial)", id: cero++},     
        
    {enlace:'https://www.youtube.com/watch?v=0i7-nNOCjiM', nombre: "Reik - Me Duele Amarte", id: cero++},  
        
    {enlace:'https://www.youtube.com/watch?v=79D4CCyFcSY', nombre: "Reik - Tu Mirada", id: cero++}, 
        
    {enlace:'https://www.youtube.com/watch?v=Y-ffY9mbZBo', nombre: "Ricardo Arjona - Te Conozco", id: cero++}, 
    
    {enlace:'https://www.youtube.com/watch?v=Dr8iPBCBFj4', nombre: "Ricardo Arjona - Realmente No Estoy Tan Solo", id: cero++},     
        
    {enlace:'https://www.youtube.com/watch?v=gJny9MFtwBg', nombre: "Alvaro Torres - Nada Se Compara Contigo", id: cero++}, 
        
    {enlace:'https://www.youtube.com/watch?v=jT6D3LOpnhM', nombre: "Alvaro Torres Reencuentro ft Barrio Boyzz", id: cero++},     
        
    {enlace:'https://www.youtube.com/watch?v=CQgVyTMzEA0', nombre: "Reik - Qué Gano Olvidándote (Official Video)", id: cero++}, 
        
    {enlace:'https://www.youtube.com/watch?v=2TRhF2f3A1o', nombre: "Reik - Qué Vida la Mía", id: cero++},
        
    {enlace:'https://robertomiguelz.blogspot.com/2016/01/convertir-en-n-pasar-texto-de-un.html', nombre: "Convertir <br> en \n (Pasar texto de un elemento HTML a un TextArea y viceversa, respetando saltos de línea)", id: cero++}, 
        
    {enlace:'http://w3.unpocodetodo.info/canvas/video.php', nombre: "video en el cambas", id: cero++},    
        
    {enlace:'https://www.youtube.com/watch?v=BuY7HYSDoTM', nombre: "Jesse & Joy - Espacio Sideral [Video]", id: cero++},
        
    {enlace:'https://devcode.la/tutoriales/manejo-de-arrays-en-javascript/', nombre: "Manejo de Arrays en JavaScript ", id: cero++},    
        
    {enlace:'https://www.youtube.com/watch?v=0yr75-gxVtM', nombre: "Chino & Nacho - Me Voy Enamorando ft. Farruko (Remix) (Official Music Video)", id: cero++},        
        
    {enlace:'https://www.youtube.com/watch?v=xvjS9kDgtTs', nombre: "Dvicio - Enamorate (en el Coche)", id: cero++},   
        
];
    
    
    
    
    const formulario = document.querySelector('.pantalla-display-buscador #inputBusqueda');
    const boton = document.querySelector('.pantalla-display-buscador .boton-buscar');
    const resultado = document.querySelector('.display-buscador-body #resultado');

    
    
    

    const filtrar = ()=>{


        
        resultado.innerHTML = '';

        const texto = formulario.value.toLowerCase();

        for(let producto of productos){
            let nombre = producto.nombre.toLowerCase();
            let enlace = producto.enlace.toLowerCase();

            if((accent_fold(nombre).indexOf(texto) !== -1) || (enlace.indexOf(texto) !== -1) ){
                resultado.innerHTML += '<div class="'+'elbusqueda'+ producto.id +'"><a href="' + producto.enlace + '" target="_self"'+'><li><p>' + producto.nombre + '</p></li></a></div>';

                $('#resultado div').show(function(){
                    $('#resultado div').addClass('listadoB');
                });
                
                

            }
        }

        if(resultado.innerHTML === ''){
            resultado.innerHTML += `<li class="resultado-nulo-busqueda"><p>• Tu petición de busqueda no ha sido encontrada </p></li><div class="resultado-no-encontrado"><img src="`+generateDot()+`Imagenes/fondos/buscador/mujer-arrecostada-en-arbol.jpg"></div>`;
        }
        
    }


    boton.addEventListener('click',filtrar);
    formulario.addEventListener('keyup',filtrar);




    filtrar();
    
    




    










