$(".img-detalles-producto").attr("src",src_imagen);    
let img_logo = "logo-quicklink.png";
let img_logo_mordido = "logo-quicklink-mordido.png";
document.querySelector("#id-cont-imagen-logo").addEventListener("click",function(){
 $("#id-imagen-logo").attr("src",img_logo);
    setTimeout(function(){
        $("#id-imagen-logo").attr("src",img_logo_mordido);
    },3000);    
});
