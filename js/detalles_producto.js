
/*$(document).on('click', '#icono-carrito-compras-main', () =>{        
    $(".div-detalles-carrito").toggleClass("mostrar-detalles-carrito"); 
  });
*/
//selecionar producto y cambiar imagen en div detalles
var global_element_selected_current;
var global_name_product;
var global_description_product;
var global_cantidad_productos = 1;

$(document).on('click', ".imagen-producto", function(){
    //selecionamos los datos de cada producto par mostrar en div detalles
    global_element_selected_current = $(this)[0];                   
    let src_imagen = $(global_element_selected_current).attr("src");                      
    global_name_product = $(global_element_selected_current.parentElement.children[1]).text();    
    //global_description_product =$(global_element_selected_current.parentElement.children[1]).text();   
    //console.log(global_name_product);

    //en el divb detalles , poenmos los datos del prodcuto selecionado
    $(".img-detalles-producto").attr("src",src_imagen);    
    $("#titulo-detalles-producto").html(global_name_product);   

    ////controlamos el click al producto   
    if(!estaMostrando()){
        setTimeout(function(){$( ".div-detalles" ).trigger( "click" );}, 200); 
    }
}); 

//funcion para  saber si se esta mostrando la div de talles producto
function estaMostrando(){
    if(($(".div-detalles").attr("class")) == "div-detalles mostrar-detalles") {
        //console.log("mostrando");
        return true;
    }  else{
        //console.log("NO mostrando");
        return  false;
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

//aumentar y disminuir produtos
global_cantidad_productos =1;
let var_cantidad_producto_actual = 1;
$(".disminuir-productos").click(function(e){   
    global_cantidad_productos--;
    if(global_cantidad_productos <= 0){
        global_cantidad_productos =1;
    }else{        
        $(".cantidad-producto").val(global_cantidad_productos);
    }
});

$(".aumentar-productos").click(function(e){
    global_cantidad_productos++;
    if(global_cantidad_productos > 10){
        global_cantidad_productos =10;
    }else{        
        $(".cantidad-producto").val(global_cantidad_productos);
    }   
});
