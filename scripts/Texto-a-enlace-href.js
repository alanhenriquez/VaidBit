function replaceURLWithHTMLLinks(e){
    return e.replace(/(\(.*?)?\b((?:https?|ftp|file):\/\/[-a-z0-9+&@#\/%?=~_()|!:,.;]*[-a-z0-9+&@#\/%=~_()|])/gi,function(e,r,n){var t="";r=r||"";for(var a=/\(/g;a.exec(r);){var l;(l=/(.*)(\.\).*)/.exec(n)||/(.*)(\).*)/.exec(n))&&(n=l[1],t=l[2]+t)}return r+"<a href='"+n+"' target='_blank' rel='nofollow noopener'>"+n+"</a>"+t})}
document.addEventListener("DOMContentLoaded",function(event){
var elm=document.querySelector(".text2url");elm.innerHTML=replaceURLWithHTMLLinks(elm.innerHTML);});






/*Para que el codigo funcione nesesitaras colocar el siguiente identificador en unicamente el contenedor que contenga especificamente el texto a comvertir [id="text2url"]

*Ejemplo:

<div id="text2url">
    <p>
        Texto que contiene una o varias direcciones URL como file:///Users/oscargiovannihenriquez/Desktop/Ahenter/Ahenter.Videos.html, para convertirlas en enlaces.
    </p>
</div>

___________________________________________________

*Ejemplo de que no hacer:

<div id="text2url">
    <p>
        Texto que contiene una o varias direcciones URL como file:///Users/oscargiovannihenriquez/Desktop/Ahenter/Ahenter.Videos.html, para convertirlas en enlaces.
    </p>
<div id="text2url">
    <p>
        Texto que contiene una o varias direcciones URL como file:///Users/oscargiovannihenriquez/Desktop/Ahenter/Ahenter.Videos.html, para convertirlas en enlaces.
    </p>
</div>
</div>

















CODIGO JAVA PARA EFECTO RIPPLE






 var root = document.documentElement;

document.addEventListener("mousedown", ev=>{

    var el = ev.target,  top = 0, left = 0;
    do {

        top += el.offsetTop;

        left += el.offsetLeft;

    } while(el = el.offsetParent);

    var x = (ev.clientX - left) / ev.target.offsetWidth;

    var y = (ev.clientY - top) / ev.target.offsetHeight;

    root.style.setProperty("--ripple-x", x);

    root.style.setProperty("--ripple-y", y);

})




CODIGO CSS PARA EFECTO RIPPLE



.nombre-lista-enlace p::after{
    content: '';
    position: absolute;
    background-color: #eee;
    padding: 50%;
    left: calc(100% * var(--ripple-x));
    top: calc(100% * var(--ripple-y));
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
    transition: transform 1s, opacity 1s;
}

.nombre-lista-enlace p:active::after{
    transition: 0s;
    opacity: 1;
    transform: translate(-50%, -50%) scale(0);
}
*/