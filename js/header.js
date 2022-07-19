document.querySelector("#id-cont-imagen-logo").addEventListener("click",function(){
 $("#id-imagen-logo").attr("src","/imgs/logo-quicklink-mordido.png");
    setTimeout(function(){
        $("#id-imagen-logo").attr("src","/imgs/logo-quicklink.png");
    },3000);    
});