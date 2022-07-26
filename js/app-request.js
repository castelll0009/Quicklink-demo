$(document).ready(function() {  
    fetchProducts();// list de  collections
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
                url: "backend/task-search.php",
                type: "POST",
                data: {search},
                success: function(response){                    
                    console.log(response);                    
                    
                    if(!response.error) {
                        let elements = JSON.parse(response);                                                      
                        $('#tasks').html(getTemplateProducto(elements));                         
                    }                                        
                }
            })
        }
    });                    
}
function fetchProducts() {
    $.ajax({
        url: 'backend/products-list.php',
        type: 'GET',
        success: function(response) {
        // console.log("RESPUESTA  FETCH"+ response);
        const elements = JSON.parse(response);              
        //let template_nuevo_producto = '';
        console.log(elements);    
        $('#tasks').html(getTemplateProducto(elements));                                 
        $('.cont-list-products-admin').html(getTemplateProductoCard(elements));                                 
        //todos     
        }
    });
}

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

function getTemplateProductoCard(jsonElements){
    let template= "";       
    jsonElements.forEach(element => {   
        //let hrefStreaming = getHrefStreaming(product);
        template += `
        <div class=" card-products rounded card   bg-dark text-white" style="width: 18rem;">
        <img src="http://w3codegenerator.com/img/sample-image/new_zealand-300x225.jpg" class="card-img-top"
          alt="Card image cap">
        <div class="card-body d-flex flex-column p-2">
          <h6 class="title-name-product card-title mb-0 ">${element.nombre_producto}</h6>
          <p class="p-price-product card-text text-center">$${element.precio}</p>                
        </div>
        <a href="#" class="a-edit-product  p-1.2 m-0 h-0  ">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
          </svg>
       </a>
      </div>   
        `                                           
    });
    return template;
}