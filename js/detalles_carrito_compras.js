//ir a abajo en tabla al total
document.querySelector(".cont-flecha-abajo-total-carrito").addEventListener("click", function(){ 
  ir_al_total();    
});
document.querySelector(".cont-flecha-abajo-total-carrito").addEventListener("click", function(){   
  ir_al_total();
});

//FUNCIONES
function ir_al_total(){
  document.getElementById('bot-table').scrollIntoView(true);
}
     
  //FUNCION para desplegar los detalles del carrito

$(document).on('click', '.cont-iconoCarrito-cantidadProductosdiv-detalles-carrito', () =>{        
    $(".div-detalles-carrito").toggleClass("mostrar-detalles-carrito"); 
});
$(document).on('click', '.div-detalles-carrito', () =>{        
    $(".div-detalles-carrito").toggleClass("mostrar-detalles-carrito"); 
});

$(document).on('click', '.icono-carrito-compras', () =>{        
  $(".div-detalles-carrito").toggleClass("mostrar-detalles-carrito"); 
});


//ver carrito 
var boton_ver = document.querySelector(".btn-ver").addEventListener("click",   function(){
  $(".div-detalles-carrito").toggleClass("mostrar-detalles-carrito");     
});

var boton_ordenar = document.querySelector(".btn-ordenar").addEventListener("click",   function(){
  $(".div-detalles-carrito").toggleClass("mostrar-detalles-carrito");     
});

//agregar productos al carrito
var boton_agregar = document.querySelector(".btn-agregar");
boton_agregar.addEventListener("click", function(){
  event.stopPropagation();       
  agregarProductoCarrito();

});

//AGREGAR PRODUCTOS CARRITO
var numero_fila = 0; 
function agregarProductoCarrito(){     
  //recuperamos el Nombre,Cantidad y el precio del producto agregar al  pedidoo carrito  
  $(".icono-animation-burguer").addClass("fadeout");
  cantidad_pedido= 1;
  precio_pedido = 6000; 
  descripcion_pedido = $("#id-detalles-pedido").val();   //description actual 
  console.log("description to add"+descripcion_pedido);
  //creamos un nuevo template  tr que contendra los 3  valores        
  //AGREGAR FILA CARRITO CALCULAR TOTALES  , agregar un elemento al carrito      

  addNewRow();                 
}
var total_pagar = 0;
var cantidad_total = 0;
function addNewRow(){        
  //por ahora quitamos la propiedad contenteitable de la t cantiodadeditable contenteditable        
    numero_fila++;    
    $('.table').prepend(`
    <tr id="fila${numero_fila}">
      <td> ${numero_fila}</td>
      <td> ${global_name_product}</td>
      <td>1</td>
      <td>6000</td>
      <td class="td-eliminar-producto" onclick="eliminarFilaPedido(${numero_fila})"><i  class="icon-basura fas fa-trash-alt"  onclick="eliminarFilaPedido(${numero_fila})></i></td>
      <td  style="position: absolute; display:none; opacity: 0;" class="descripcion-pedido-tabla">${descripcion_pedido}</td>    
    </tr>
    `); 
    total_pagar+= 6000;
    $(".cantidad-productos-carrito").html(numero_fila);    
    $("#cantidad-total-pedido").html(numero_fila);
    $("#total-pagar-pedido").html(total_pagar); 
    /*
    const elementa = document.querySelector('.cont-iconoCarrito-cantidadProductos');
  element.classList.add('animate__animated', 'animate__bounceOutLeft');
  */

    console.log("numoer fila "+ numero_fila);
   
    //$(".cont-iconoCarrito-cantidadProductos").addClass("animacion-corre-carrito");    
    $(".cantidad-productos-carrito").toggleClass("animacion-agregar-carrito");    
    //$(".cont-iconoCarrito-cantidadProductos").addClass("animacion-agregar-carrito");    
      
    $.jGrowl("+"+global_name_product );
                    
} 
var index=0;
function eliminarFilaPedido(index) {     
  var cantidad_elemento_eliminar = $(`#fila${index} td:nth-child(3)`).text();
  var precio_elemento_eliminar = $(`#fila${index} td:nth-child(4)`).text();  
  /*var auxTotalEliminar =   parseInt( parseInt(cantidad_elemento_eliminar) * parseInt(precio_elemento_eliminar));   */   
  $("#fila"+index).remove();    
  numero_fila--; 
  total_pagar-= 6000;
  $(".cantidad-productos-carrito").html(numero_fila);    
  $("#cantidad-total-pedido").html(numero_fila);
  $("#total-pagar-pedido").html(total_pagar); 
  //contenedor de elemetos pedidos debe diminuir -1 y ademas se debe desontar el total del
  //productoi eliminado del total a pagar
  //eliminamos del JSON_productos el elementos
}   

  
//CONFIRMAR  ORDEN 
var boton_confirmar_orden = document.querySelector(".btn-confirmar-orden");
var numero_telefono = "+573202486769";
var cadenaURL ="";
var cadenaEncabezado ="";
var cadenaListaProductos ="";
boton_confirmar_orden.addEventListener("click", function(){      
  event.stopPropagation();    
  ir_al_total();
  setTimeout(function(){
    if(numero_fila  > 0 ){
      $(".icono-animation-burguer").css("display", "none");
        if(confirm("Are you sure you want to finalize your purchase? Your order will be sent to the seller's Whatsapp.") ){
          //el usuario acepto hacer la compra, recuperamos los datos de su pedido                          
          //enlistamos productos desde el carrito  que estaban en el JSON
          var numero_mesa = "Table 1";
          cadenaEncabezado = "https://wa.me/"+numero_telefono+"?text=🍺🍸🍨%0AQUICKLINK (ONLINE ORDER)%0A"+numero_mesa+"%0A🍺🍸🍨%0A%0A";
          
          //enlistamos los productos en una cadena desde el JSON_produtos        
          let nombre_pedido = "";
          let descripcion_pedido_ordenar = "";
          for(let i = 1; i <= numero_fila; i++){   
             nombre_pedido = $(`#fila${i} td:nth-child(2)`).text();
             descripcion_pedido_ordenar = $(`#fila${i} td:nth-child(6)`).text();                          
              console.log(nombre_pedido+" "+ descripcion_pedido_ordenar);
              cadenaListaProductos +=`_______________________%0A${nombre_pedido}%0APRECIO:$6000%0AOPCIÓN: The specialty of the house%0AADICIÓN: surprise me with the additions%0ADESCRIPCIÓN: ${descripcion_pedido_ordenar}%0APRECIO: $6000%0ACANTIDAD: 1%0ASUBTOTAL: $6000%0A%0A`;              
            }   
          cadenaURL += cadenaEncabezado; 
          cadenaURL += cadenaListaProductos;
          cadenaURL +=`_______________________%0ATOTAL TO PAY:${document.getElementById("total-pagar-pedido").innerText} %0A%0A->>Pago pendiente<<-%0A%0A%0A%0AYou see how easy it was, so it will be for your customers. Come on write to me! `;
          console.log(cadenaURL);
          //acion enviar pedido WHapsap      
          //URL_orden =  window.location = cadenaURL; 
          URL_orden = window.open(cadenaURL, '_blank');      
        }   
        
      }else{   
      $.jGrowl(`Are you going to eat wind? Add products to cart please`);
      $(".icono-animation-burguer").css("display", "block");
    }

  },1000);  
  
    
});

