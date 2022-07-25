$(document).ready(function() {  
    //fetchProducts();// list de  collections
    //addEditElements();  
    //editElements();
    searchShowElements();  
    //deleteElements();  
    //gotoEditItemCollection();     
    //searchShowElementsByDate();
    //searchShowElementsByDateRanges();
    //ListUsuariosSelect();     
  });
  
function searchShowElements(){
    $("#search").keyup(function(){        

        if( ($('#search').val()) == "" ){   
            //esta  vacio el search por ende  solo  enlistamos  los productos       
            //fetchProducts();
        }else{
            let search = $("#search").val();       
            console.log(search);
            $.ajax({
                url: "backend/product-search.php",
                type: "POST",
                data: {search},
                success: function(response){
                    
                    console.log(response);
                    /*
                    if(!response.error) {
                        let elements = JSON.parse(response);                                                      
                        $('#tasks').html(getTemplateProducto(elements));                         
                    }
                    */
                }
            })
        }
    });                    
}

/*
function getTemplateProducto(jsonElements){
    let template= "";       
    jsonElements.forEach(element => {   
        //let hrefStreaming = getHrefStreaming(product);
        template += `
        <tr>
            <td>${element.id}</td> 
            <td>${element.nombre_producto}</td> 
            <td>${element.categoria}</td> 
            <td>${element.url_imagen}</td> 
            <td>${element.precio}</td> 
            <td>${element.description}</td>     
        </tr>    
        `                                           
    });
    return template;
}
*/