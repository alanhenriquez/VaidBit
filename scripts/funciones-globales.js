    













//-- ESTA FUNCION SERVIRA PARA GERENAR EL TIEMPO ACTUAL




function tiempo(){
    
    var meses_escritos = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var colocarmeses = meses_escritos;
    var year = new Date();     
    var month = new Date();   
    var day = new Date();        
    var hours = new Date();
    var minutes = new Date();
    var seconds = new Date();     
    var ampm = hours <= 12 ? 'a.m.' : 'p.m.';   
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
    ponertiempo = day + ' de ' + colocarmeses[month] + ' del ' + year + ' • ' + hours + ':' + minutes + ' ' + ampm;
    return ponertiempo;
    
}