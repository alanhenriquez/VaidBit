







  
let barra = document.querySelector('.reproduction-container .reproduction-body');
function posicion(element){
    
    
    var e = '';
    var pos = $(element).offset(),
    posX = e.pageX - pos.left;
    console.log(pos);
    console.log(posX);
    element.addEventListener(onclick, console.log(pos));
    
}
posicion(barra);






