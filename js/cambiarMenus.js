
/* Cambiar menus*/

var boton = document.getElementById('btn-Hamburguesa'),
    navPrincipal= document.getElementById('contenedor-nav'),
    contadorMenu=0;

    function cambiarMenu(){
        if(contadorMenu==0){
            navPrincipal.classList.add('MostrarNav');
            contadorMenu=1;
        }else{
            navPrincipal.classList.remove('MostrarNav');
            contadorMenu=0;
        }
    }

    boton.addEventListener('click',cambiarMenu,true);



/* Cambiar Paginas  */

var home= document.getElementById('fa-home'),
    perfil= document.getElementById('fa-usere'),
    resumen= document.getElementById('fa-address-book'),
    portafolio= document.getElementById('fa-briefcase'),
    contacto= document.getElementById('fa-comments');

var //pagHome= document.getElementById('contMainPerfil'),
    pagPerfil= document.getElementById('contMainPerfil'),
    pagResumen= document.getElementById('contenMainResumen'),
    pagPortafolio= document.getElementById('contenMainPortafolio'),
    pagContacto= document.getElementById('contenMainContacto');

    contPaginas=0


    function mostrarPagina(){
        
        if(contPaginas != 0){
            pagPerfil.style.cssText='display:none; left:-10000px;';
            pagResumen.style.cssText='display:none; left:-10000px';
            pagPortafolio.style.cssText='display:none; left:-10000px;';
            pagContacto.style.cssText='display:none; left:-10000px;';

            contadorMenu=0;
        }else{ 
            pagPerfil.style.cssText='display:none; left:-10000px;';
            pagResumen.style.cssText='display:none; left:-10000px';
            pagPortafolio.style.cssText='display:none; left:-10000px;';
            pagContacto.style.cssText='display:none; left:-10000px;';
            contadorMenu=0;
          }
 }

    function mostrarPagina1(){
        
           if(contPaginas != 1 ){
            pagResumen.style.cssText='display:none; left:-10000px;';
            pagPortafolio.style.cssText='display:none; left:-10000px;';
            pagContacto.style.cssText='display:none; left:-10000px;';
            pagPerfil.style.cssText='display:block; left:0px;';


            contadorMenu=1;

           }else{ 
             pagPerfil.style.cssText='display:none; left:-10000px;';
             contadorMenu=0;
           }
            
    }

    function mostrarPagina2(){
        if(contPaginas != 2){
            pagPerfil.style.cssText='display:none; left:-10000px;';
            pagResumen.style.cssText='display:block; left:0px;';
            pagPortafolio.style.cssText='display:none; left:-10000px;';
            pagContacto.style.cssText='display:none; left:-10000px;';
            contadorMenu=2;
           }else {
                pagResumen.style.cssText='display:none; left:-10000px;';
                contadorMenu=0;
            }
    }

    function mostrarPagina3(){
        if(contPaginas != 3){
            pagPerfil.style.cssText='display:none; left:-10000px;';
            pagResumen.style.cssText='display:none; left:-10000px;';
            pagPortafolio.style.cssText='display:block; left:0px;';
            pagContacto.style.cssText='display:none; left:-10000px;';
            contadorMenu=3;
           }else {
            pagPortafolio.style.cssText='display:block; left:0px;';
            contadorMenu=0;
        }
    }


    function mostrarPagina4(){
        if(contPaginas != 4){
            pagPerfil.style.cssText='display:none; left:-10000px;';
            pagResumen.style.cssText='display:none; left:-10000px;';
            pagPortafolio.style.cssText='display:none; left:-10000px;';
            pagContacto.style.cssText='display:block; left:0px;';
            contadorMenu=4;
           }else {
            pagContacto.style.cssText='display:block; left:0px;';
            contadorMenu=0;
        }
    }

    home.addEventListener('click',mostrarPagina,true);
    perfil.addEventListener('click',mostrarPagina1,true);
    resumen.addEventListener('click',mostrarPagina2,true);
    portafolio.addEventListener('click',mostrarPagina3,true);
    contacto.addEventListener('click',mostrarPagina4,true);

