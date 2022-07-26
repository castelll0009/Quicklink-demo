<?php

include('database.php');  
  $query = "SELECT * from tbl_productos";
  $result = mysqli_query($connection, $query);
  if(!$result) {
    die('Query Failed'. mysqli_error($connection));
  }else{    
  }

  $json = array(); // creamos un arreglo y lo llenamos con los datos de la Base de datos  
  while($row = mysqli_fetch_array($result)) { // recoremos cada fila  y de cada fila sacamos: caregoy, name, price, descrition, 
    $json[] = array(
      'nombre_producto' => $row['nombre_producto'],
      'categoria' => $row['categoria'],
      'url_imagen' => $row['url_imagen'],
      'precio' => $row['precio'],
      'descripcion' => $row['descripcion'],
      'id' => $row['id']      
    );
  }
  //header("Content-Type: application/json");  
  echo $jsonstring = json_encode($json);    
  //echo $jsonstring;    
  
?>
