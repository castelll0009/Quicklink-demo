
let img_logo = "imgs/logo-quicklink.png";
let img_logo_mordido = "imgs/logo-quicklink-mordido.png";
document.querySelector("#id-cont-imagen-logo").addEventListener("click",function(){
 $("#id-imagen-logo").attr("src",img_logo_mordido);
    setTimeout(function(){
        $("#id-imagen-logo").attr("src","../imgs/img_logo");
    },3000);    
});
