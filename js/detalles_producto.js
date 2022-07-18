
/*$(document).on('click', '#icono-carrito-compras-main', () =>{        
    $(".div-detalles-carrito").toggleClass("mostrar-detalles-carrito"); 
  });
*/
//selecionar producto y cambiar imagen en div detalles
$(document).on('click', ".imagen-producto", function(){
    let  element = $(this)[0];           
    src_actual = $(element).attr("src");
    
    let src_imagen = $(element).attr("src");
    ////console.log(src_imagen);
    $(".img-detalles-producto").attr("src",src_imagen);       
    if(estaMostrando()){
     
    }else{
        setTimeout(function(){$( ".div-detalles" ).trigger( "click" );}, 200);        
    }
}); 

function estaMostrando(){
    if(($(".div-detalles").attr("class")) == "div-detalles mostrar-detalles") {
        //console.log("mostrando");
        return true;
    }  else{
        //console.log("NO mostrando");
        return     false;
    }          
    
}
       
$(document).ready(function(){    
        //desplejar la sinta desde abajo   
    $(".desplegar-detalles-producto").click(function(){                    
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
