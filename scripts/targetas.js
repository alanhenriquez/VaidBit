








    let contenedor = {
        
    };

    let corazon = document.querySelectorAll(".cint-cboton .icon-heart-empty");
    let corazonNum = document.querySelectorAll(".cint-cboton .ajuste-numero");
    let corazonCMayor = document.querySelectorAll(".ctbitqius");

    let numAbrev = function(a,b){
        /*PRIMER ELEMENTO (a) ES PARA BUSQUEDA GLOBAL DE ETIQUETA P*/
        /*SEGUNDO ELEMENTO (b) ES PARA UNA BUSQUEDA DIRECTA DEL CONTENEDOR ESPECIFICO*/


        //LOCALIZAMOS EL CONTENEDOR A ABREVIAR
        let contenedores = {
            global: $(a).find("p"),
            direct: $(a).find(b),
        };

        //PROCESAMOS SU CONTENIDO (NUMEROS)
        let proceso = function(b){


            //PROCESO
            let expresReg = /([^\d]*)\s/g;
            let texto =  contenedores.global[b].textContent.replace(expresReg, "") || contenedores.direct[b].replace(expresReg, "");
            let digito = parseInt(texto);


            let letras = ["k","M","kM","B","kB","T","kT","C","kC","Q","kQ","S","kS","Se","kSe","Oc","kOc","Nov","kNov","D","kD"];
            let resta = parseInt(Math.floor(Math.log(texto) / Math.log(1000))) - 1;
            let posLetra = letras[resta];
            let mensage = "longest";
            let decimales = 1;
            let condicional = function(a){


                if(digito > 999){

                    while(digito > 999){
                        digito /= 1000;
                    }
                    let resultado = digito.toFixed(decimales) + posLetra;
                    if(posLetra === undefined){
                        $(contenedores.global[a]).text(mensage);
                    }
                    else{
                        $(contenedores.global[a]).text(resultado);
                    };
                }
                else{
                    $(contenedores.global[a]).text(texto);

                };



            };
            condicional(b);
            //TERMINA PROCESO


        };

        //LANZAMOS A TODO
        for(let i = 0;i < contenedores.global.length; i++){
            proceso(i);
        };
        for(let i = 0;i < contenedores.direct.length; i++){
            proceso(i);
        };


    };
    let iconFilled = function(a){


        let contenedores = {
            global: $(a).find("label").parent(),
            globalP: $(a).find("label").parent().siblings().find("p"),
            heartFullIcon: "icon-heart",
            heartEmptyIcon: "icon-heart-empty",
            heartLiked: "liked",
            savedFullIcon: "icon-bookmark",
            savedEmptyIcon: "icon-bookmark-empty",
        };


        //AGREGAMOS LA DATA A EVALUAR DEL ELEMENTO REACTION NUMERO
        $(contenedores.globalP).parent().attr("datauser-post-reaction","no-reaction");
        let cReaction = $(contenedores.globalP).parent();


        //SUMAMOS EL ELEMENTO + 1 AL REACCIONAR
        let conteo = function(a){
            let conteo = 0;
            $(a).show(function(){
                if(this.getAttribute('datauser-post-reaction') === 'no-reaction'){
                    $(this).attr('datauser-post-reaction', 'reactioned');
                    let updateDisplay = function(val) {

                        numero_seguidores.innerHTML = val;
                    };
                    updateDisplay(++conteo);
                }
                else if(this.getAttribute('datauser-post-reaction') === 'reactioned'){
                    $(this).attr('datauser-post-reaction', 'no-reaction');

                    let updateDisplay = function(val) {
                        numero_seguidores.innerHTML = val;
                    };
                    updateDisplay(--conteo);


                }
            });
        };


        //REALIZAMOS LA CONDICIONAL
        let condicionales = function(){
            $($(contenedores.global.children()).click(function(){
                if($(this).hasClass(contenedores.heartEmptyIcon)){

                    $(this).removeClass(contenedores.heartEmptyIcon);
                    $(this).addClass(contenedores.heartFullIcon);
                    $(this).parent().addClass(contenedores.heartLiked);
                    conteo($(this).parent().siblings().find("p").parent());

                }
                else if($(this).hasClass(contenedores.heartFullIcon)){

                    $(this).removeClass(contenedores.heartFullIcon);
                    $(this).addClass(contenedores.heartEmptyIcon);
                    $(this).parent().removeClass(contenedores.heartLiked);
                    conteo($(this).parent().siblings().find("p").parent());

                }
                else if($(this).hasClass(contenedores.savedEmptyIcon)){

                    $(this).removeClass(contenedores.savedEmptyIcon);
                    $(this).addClass(contenedores.savedFullIcon);
                    conteo($(this).parent().siblings().find("p").parent());

                }
                else if($(this).hasClass(contenedores.savedFullIcon)){

                    $(this).removeClass(contenedores.savedFullIcon);
                    $(this).addClass(contenedores.savedEmptyIcon);
                    conteo($(this).parent().siblings().find("p").parent());

                }
            }));
        };
        condicionales();


    }
    /*iconFilled(".espacioP");*/


        function NumAbrev(a){
            // NumAbrev: v2.01 by Alan Henriquez 2022
            //
            // VARIABLE (a) REPRESENTA EL NUMERO A ABREVIAR
            //
            // - Para que funcione deberas colocar en la variable (a) el numero
            // deseado a modificar en formato de cadena de texto. De lo contrario 
            // esta funcion no servira en el proceso.
            //
            // - La razon del por que es a que abrevia automaticamente los numeros
            // lasrgos, afectando el buen funcionamiento.
            //
            // - Puedes usar un numero pero si este es demasiado largo, entonces
            // no funcionara. Se recomienda convertirlo primero en cadena antes de usar
            
            let entrada = a;
            let cadena = String(entrada);
            let digito = parseInt(entrada);
            let letras = ["k","M","kM","B","kB","T","kT","C","kC","Q","kQ","S","kS","Se","kSe","Oc","kOc","Nov","kNov","D","kD"];
            let indice = parseInt(Math.floor(Math.log(cadena) / Math.log(1000))) - 1;
            let posLetra = letras[indice];
            let mensage = "Longer";
            let fin = "";
            let posPoint = 0;
            let decimal =  2;
            let condiciones = function(){
                
                    if(digito > 999){
                        while(digito > 999){
                            digito /= 1000;
                        };
                        posPoint = parseInt((String(digito)).indexOf("."));
                        digito = String(digito).substring(0,posPoint+decimal);
                        if(posLetra === undefined){
                            fin = mensage;
                        }
                        else{
                            fin = digito+posLetra;
                        }
                    }
                    else{
                        fin = digito+"";
                    };
            };
            condiciones();
            return fin;
            
        };
        function changeRNum(b,a,c,d,) {
            // ChangeRNum: v1.02 by Alan Henriquez 2022
            //
            // VARIABLE (a) REPRESENTA CONTENEDOR CON EL NUMERO A MODIFICAR
            // VARIABLE (b) REPRESENTA TIPO DE ACCION A REALIZAR (SUMA, RESTA, LAS DOS)
            // VARIABLE (c) REPRESENTA EL CONTENEDOR BOTON PARA REALIZAR LA ACCION
            // VARIABLE (d) REPRESENTA EL CONTENEDOR SUPERIOR (opcional*)
            //
            // - Para que funcione deberas tener el numero adentro de una etiqueta " p "
            // al menos que introduscas la clase o etiqueta que prefieras desde:
            // (contenido.cont1)
            // de cambiar la etiqueta, esta debera ser el padre de donde se encuentre el texto.
            //
            // - Respecto a la variable d (opcional*). Solo se usara en caso de que tengas 
            // mas de un elemento, ejemplo:
            // (una lista de elementos con contador por cada uno y su boton).
            // esta debera ser como minimo el contenedor que agrupa tanto el boton como el numero
            
            console.log(a);
            console.log(b);
            console.log(c);
            console.log(d);
            let VFList = {
                var1: a, //CONTENEDOR CON EL NUMERO 
                var2: b, //ACCION OPERACIONAL
                var3: c, //BOTON
                var4: d, //SUPERIOR
            };
            let ecuState = {
                ecu1: "suma", //CUALQUIER NOMBRE. (ESTA SUMA +1)
                ecu2: "resta", //CUALQUIER NOMBRE. (ESTA RESTA -1)
                ecu3: "duo", //CUALQUIER NOMBRE. (ESTA SUMA +1 Y RESTA -1)
                btnName: "boton", //AGREGANDO ATTR VALUE AL BOTON
                btnAttr: "valueBtn", //AGREGANDO ATTR AL BOTON
                numName1: "no-reaction", //AGREGANDO ATTR VALUE AL NUMERO
                numName2: "reaction", //AGREGANDO ATTR VALUE AL NUMERO
                numAttr: "reactioned", //AGREGANDO ATTR AL NUMERO
                cantidadAttr: "numActual", //ETIQUETA CANTIDAD DEL NUMERO
                cantidad: "0", //NUMERO INICIAL
            };
            let contenido = {
                cont1: $(VFList.var1).find("p"), 
                cont2: $(VFList.var1),
                unico: VFList.var1.item(0),
                boton: VFList.var3.item(0),
                cantidad: VFList.var1.length,
            };
            
            let agregado = {
                //AGREGAMOS LOS ATTR A LOS ELEMENTOS
                numSpace: $(VFList.var1).attr(ecuState.numAttr,ecuState.numName1),
                cantidad: $(contenido.cont1).attr(ecuState.cantidadAttr,ecuState.cantidad),
                btn: $(VFList.var3).attr(ecuState.btnAttr,ecuState.btnName),
            }; 
            let cantidad = function(a,b) {
                // VARIABLE (a) REPRESENTA CONTENEDOR CON EL NUMERO A MODIFICAR
                // VARIABLE (b) REPRESENTA EL NUMERO DEL CONTENEDOR A MODIFICAR
                // - Aqui trabajamos con el aumento de la cantidad del attr del
                // elemento a aumentar mediante las siguientes condiciones
                
                if($(contenido.cont1).attr(ecuState.cantidadAttr) === ecuState.cantidad){
                    // - Si es la primera vez que se agrega este atributo
                    // le pondremos el contenido del elemento uno por uno
                    
                    for(let i = 0; i < contenido.cantidad; i++){
                        $(contenido.cont1[i]).show(function(){
                            let actual = parseInt($(this).text());
                            $(this).attr(ecuState.cantidadAttr,actual);
                        });
                    };
                }
                else if($(contenido.cont1).attr(ecuState.cantidadAttr) !== ecuState.cantidad){
                    // - Ahora que ya tiene el contenido de su elemento
                    // le ejecutaremos el aumento mediante 
                    // la variable (a) y (b), que funciona cada vez
                    // que se le da click al boton
                    
                    $(a).attr(ecuState.cantidadAttr,b);
                }
                else{
                    //No hacemos nada
                };
                    
            };
            let updateDisplay = function(a,b,c) {
                // (a) ES EL ELEMENTO AL QUE LE DAS CLICK
                // (b) ES EL NUMERO DEL ELEMENTO SELECCIONADO
                // (c) ES EL NUMERO DEL ATTR DEL ELEMENTO SELECCIONADO
                //
                // - Si buscas esta funcion updateDisplay la encontraras en
                // las condicionales de la funcion (accion), mas abajo del codigo.
                //
                // - Desde aqui puedes colocar las funciones que se tengan que 
                // ejecutar cuando presionemos el boton.
                //
                
                cantidad(a,c);
                a.innerHTML = $(a).attr(ecuState.cantidadAttr);
                a.innerHTML = NumAbrev(String(c));
                
            };
            let accion = function() {
                
                if(VFList.var4 === undefined){
                    
                    $(contenido.boton).click(function(){
                        if(VFList.var2 === ecuState.ecu1){
                            $(contenido.unico).show(function(){
                                $($(this).find(contenido.cont1)).show(function(){


                                    let num = parseInt(this.textContent);
                                    let attrnum = $(this).attr(ecuState.cantidadAttr);
                                    updateDisplay(this,++num,++attrnum);

                                });
                            });
                        }//SUMA
                        else if(VFList.var2 === ecuState.ecu2){
                            $(contenido.unico).show(function(){
                                $($(this).find(contenido.cont1)).show(function(){


                                    let num = parseInt(this.textContent);
                                    let attrnum = $(this).attr(ecuState.cantidadAttr);
                                    updateDisplay(this,--num,--attrnum);


                                });
                            });
                        }//RESTA
                        else if(VFList.var2 === ecuState.ecu3){
                            $(contenido.unico).show(function(){


                                if($(this).attr(ecuState.numAttr) === ecuState.numName1){
                                    $($(this).find(contenido.cont1)).show(function(){
                                        
                                        
                                        let num = parseInt(this.textContent);
                                        let attrnum = $(this).attr(ecuState.cantidadAttr);
                                        updateDisplay(this,++num,++attrnum);
                                        
                                        
                                    });
                                    $(this).attr(ecuState.numAttr,ecuState.numName2);
                                }
                                else if($(this).attr(ecuState.numAttr) === ecuState.numName2){
                                    $($(this).find(contenido.cont1)).show(function(){
                                        
                                        
                                        let num = parseInt(this.textContent);
                                        let attrnum = $(this).attr(ecuState.cantidadAttr);
                                        updateDisplay(this,++num,++attrnum);
                                        
                                        
                                    });
                                    $(this).attr(ecuState.numAttr,ecuState.numName1);
                                }


                            });
                        }//SUMA Y RESTA
                    });
                    
                }
                else if(VFList.var4 !== undefined){
                    
                    $(VFList.var3).click(function(){
                        if(VFList.var2 === ecuState.ecu1){
                            $($(this).parent(VFList.var4)).show(function(){
                                $($(this).find(contenido.cont1)).show(function(){
                                    
                                    
                                    let num = parseInt(this.textContent);
                                    let attrnum = $(this).attr(ecuState.cantidadAttr);
                                    updateDisplay(this,++num,++attrnum);
                                    
                                    
                                });
                            });
                        }//SUMA
                        else if(VFList.var2 === ecuState.ecu2){
                            $($(this).parent(VFList.var4)).show(function(){
                                $($(this).find(contenido.cont1)).show(function(){


                                    let num = parseInt(this.textContent);
                                    let attrnum = $(this).attr(ecuState.cantidadAttr);
                                    updateDisplay(this,--num,--attrnum);


                                });
                            });
                        }//RESTA
                        else if(VFList.var2 === ecuState.ecu3){
                            $($(this).parent(VFList.var4)).show(function(){


                                if(($(this).find(contenido.cont2).attr(ecuState.numAttr) === ecuState.numName1)){
                                    $($(this).find(contenido.cont1)).show(function(){
                                        
                                        
                                        let num = parseInt(this.textContent);
                                        let attrnum = $(this).attr(ecuState.cantidadAttr);
                                        updateDisplay(this,++num,++attrnum);
                                        
                                        
                                    });
                                    $(this).find(contenido.cont2).attr(ecuState.numAttr,ecuState.numName2);
                                }
                                else if(($(this).find(contenido.cont2).attr(ecuState.numAttr) === ecuState.numName2)){
                                    $($(this).find(contenido.cont1)).show(function(){
                                        
                                        
                                        let num = parseInt(this.textContent);
                                        let attrnum = $(this).attr(ecuState.cantidadAttr);
                                        updateDisplay(this,--num,--attrnum);
                                        
                                        
                                    });
                                    $(this).find(contenido.cont2).attr(ecuState.numAttr,ecuState.numName1);
                                }


                            });
                        }//SUMA Y RESTA
                    });
                    
                }
                
            }
            
            
            cantidad();
            accion();
            
            
        };
        changeRNum("suma",corazonNum,corazon,corazonCMayor);
        



























