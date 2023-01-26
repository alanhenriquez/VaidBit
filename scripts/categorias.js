








$(document).ready(function () {


    //---------- SECCION DE VARIABLES
    
    
	let titulo = 
        document.querySelector('head title');
    
	titulo.innerHTML = 
        document.querySelector('.logo-header .nombre-vidbit p').textContent + ' - Categorias';
    
	let targeta_categ_numero = 
        document.querySelector('.categ-icons-espace');
        targeta_categ_numero = targeta_categ_numero.children.length;
    
	let targeta_boton_categ = 
        document.querySelectorAll('.ajuste-space .categ-tageta');
    
	let targeta_indicador_categ = 
        document.querySelector('.ajuste-space .categ-indicador');	
    
	let targeta_indicador_categ_punto = 
        document.querySelectorAll('.ajuste-space .categ-indicador .categ-circulo .circulo');	
    
	let nombre_categ = 
        document.querySelector('.set-nombre-seleccion .ajustar-centro p');
    
	let i = 0;
	
    
	let ccateg_videos = 
        document.querySelector('.categ-body-principal .ccateg-b-prin-videos .contenedor-global');
    
    let targeta_videos = 
        document.querySelectorAll('.ccateg-b-prin-videos .contenedor-global .ctvideo');
    
    let targeta_videos_numero = 
        document.querySelector('.ccateg-b-prin-videos .contenedor-global');
    
    let Ctargeta_videos_categ = 
        document.querySelectorAll('.ctvideo .ctinfovideo .informacion .ct-vcategoria');
    
    let targeta_videos_categ = 
        document.querySelectorAll('.ctvideo .ctinfovideo .informacion .ct-vcategoria .ctint-vcategoria .video-icon-categ');
    
    targeta_videos_numero = targeta_videos_numero.children.length;
    
    
    //---------- TERMINA SECCION DE VARIABLES ==========
	
    
    
	
    
	//---------- FUNCION DE SELECCION DE VIDEOS POR CATEGORIAS
	
	
	function seleccionCategorias(){
		
		let boton_selected = this;
		
		$(boton_selected).show(function(){
			
			
            
            
            
            //---------- EXTRAEMOS EL NOMBRE DE LA CATEGORIA
            
			
            let grupo1 = this.className.split(" ");
			let grupo1_ultimo = grupo1[1].split("-");
			let grupo2 = grupo1_ultimo;
			let grupo2_primero = grupo2[0];
			let grupo2_primero1 = grupo2_primero.replace("categ", " ");
			let grupo2_segundo = "";
			let grupo2_tercero = "";
			let iniciales = "";
			let faltantes = "";
			let inicialesMayus = "";
			let faltantesMinus = "";
			let conjunto = "";
			let NombreC1_completo = grupo1[1];
            let valor_C_Videos_Categ = targeta_videos_categ.length / 3;
            //console.log(NombreC1_completo);
            //console.log(targeta_videos_numero);
            let tvideosCateg = 0;
            
            
            
            
            for( i = 1; i < grupo2.length; i++ ){
				
				iniciales = grupo2[i].substr(0,1);
				faltantes = grupo2[i].substr(1);
				inicialesMayus = iniciales.toUpperCase(iniciales);
				faltantesMinus = faltantes.toLowerCase(faltantes);
				grupo2[i] = grupo2[i].replace( grupo2[i], inicialesMayus + faltantesMinus ) ;
				grupo2_segundo = grupo2[1];
				grupo2_tercero = grupo2[2];
				
			};	
			
			function textoCategoria(){
				
				if(grupo2_tercero === undefined){
					grupo2_tercero = "";
					conjunto = new Array(grupo2_segundo + " " + grupo2_tercero);
					let todo = grupo2_primero1 + conjunto;
					nombre_categ.textContent = todo;
					
				}
				else{
					conjunto = new Array(grupo2_segundo + " " + grupo2_tercero);
					let todo = grupo2_primero1 + conjunto;
					nombre_categ.textContent = todo;
					
				};
				
			};   
            
            
			//---------- TERMINAMOS DE EXTRAER EL NOMBRE DE LA CATEGORIA ==========
			
            
            
            
            
            //---------- FILTRAMOS LOS VIDEOS POR LA CATEGORIA
            
            
            for(let tvideosCateg of targeta_videos){
                
                let extra = '';
                let extra1 = '';
                let extra2 = '';
                
                extra = tvideosCateg;
                extra1 = $(extra).find(Ctargeta_videos_categ).children().children().hasClass(NombreC1_completo);
                extra2 = true;
                
               if((extra1 === false) && !($(boton_selected).parent().children($(targeta_indicador_categ)).children().children($(targeta_indicador_categ_punto)).hasClass('active'))){
                   $(extra).addClass('hide');
               } 
               else{
                   $(extra).removeClass('hide');
               } 
                
                
                
            };
			
            
            //---------- TERMINAMOS DE FILTRAR LOS VIDEOS POR LA CATEGORIA ==========
            
            
            
            
            
            //---------- CODICIONES DE LOS BOTONES CATEGORIAS
            
            
			$(nombre_categ).show(function(){
				
				for( i = 0; i < targeta_categ_numero; i++ ){
					
					
					
					
					if(!($(targeta_indicador_categ_punto).hasClass('active'))){
						
						
						$(targeta_indicador_categ_punto).removeClass('active');
						$(boton_selected).parent().children($(targeta_indicador_categ)).children().children($(targeta_indicador_categ_punto)).addClass('active');
						
						textoCategoria();
						
						
					}
					
					else{
						
						//SI ALGUN ELEMENTO SI TENIA LA CLASE ACTIVE
						
						if(!($(boton_selected).parent().children($(targeta_indicador_categ)).children().children($(targeta_indicador_categ_punto)).hasClass('active'))){

							//SI EL BOTON NO TIENE LA CLASE ACTIVE
							
							
							$(targeta_boton_categ[i]).parent().children($(targeta_indicador_categ)).children().children($(targeta_indicador_categ_punto)).removeClass('active');
							
							$(targeta_indicador_categ_punto).removeClass('active');
							
							$(boton_selected).parent().children($(targeta_indicador_categ)).children().children($(targeta_indicador_categ_punto)).addClass('active');

							textoCategoria();
							
                            
                            
						}
						
						else{
							
							//SI EL BOTON SI TIENE LA CLASE ACTIVE
							$(targeta_boton_categ[i]).parent().children($(targeta_indicador_categ)).children().children($(targeta_indicador_categ_punto)).removeClass('active');

							$(targeta_indicador_categ_punto).removeClass('active');
							$(boton_selected).parent().children($(targeta_indicador_categ)).children().children($(targeta_indicador_categ_punto)).removeClass('active');

							nombre_categ.textContent = "Filtrar Categoria";
							
						};
						
					};
					
					
					
					
					
				};
				
				
			});
			
			
			//---------- TERMINAN LAS CODICIONES DE LOS BOTONES CATEGORIAS ==========
			
            
            
            
            
		});
        
        
        
        
	};
	
    
    //---------- TERMINA FUNCION DE SELECCION DE VIDEOS POR CATEGORIAS ==========
	
	
    
    
    
    //---------- ACTIVACION DE LA FUNCION 
    
    
	for( i = 0; i < targeta_categ_numero; i++ ){
		
		targeta_boton_categ[i].addEventListener("click", seleccionCategorias);
		
	}
	

	//---------- TERMINA ACTIVACION DE LA FUNCION ==========
	
    
    
    
    
    //---------- CARGA STILO LAZY DE IMAGENES
    
    
	$("img.lazy").lazyload({
		effect : "fadeIn"
	});
	
    
    //---------- TERMINA CARGA STILO LAZY DE IMAGENES ==========
    
    
    
    
    
});







