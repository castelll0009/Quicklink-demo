
/*$(document).on('click', '#icono-carrito-compras-main', () =>{        
    $(".div-detalles-carrito").toggleClass("mostrar-detalles-carrito"); 
  });
*/
$(document).ready(function(){    
        //desplejar la sinta desde abajo   
    $(".desplegar-detalles-producto").click(function(){     
        console.log("MOstrar productos")   ;
        $(".div-detalles").toggleClass("mostrar-detalles");
    });

    
    $(".div-detalles").click(function(){ 
        $(".div-detalles").toggleClass("mostrar-detalles");
    }); 
    
}); 

//cancelar la  propagacion del click
$(".stopEventPropagation").click(function(e){
    event.stopPropagation();
});
