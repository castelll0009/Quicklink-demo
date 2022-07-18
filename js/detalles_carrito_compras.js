//desplegar carrito compras
/*
$(document).on('click', '#icono-carrito-compras-main', () =>{        
    $(".div-detalles-carrito").toggleClass("mostrar-detalles-carrito"); 
  });
  */

  //FUNCION para desplegar los detalles del carrito

$(document).on('click', '.btn-ver' , function(){                
    //despliegue detalles con toggle          
    $(".div-detalles-carrito").toggleClass("mostrar-detalles-carrito");        
});       
         
$(document).on('click', '.div-detalles-carrito', () =>{        
    $(".div-detalles-carrito").toggleClass("mostrar-detalles-carrito"); 
});

$(document).on('click', '.icono-carrito-compras', () =>{        
  $(".div-detalles-carrito").toggleClass("mostrar-detalles-carrito"); 
});


