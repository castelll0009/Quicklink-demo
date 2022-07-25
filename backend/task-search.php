<?php
include('database.php');

$search = $_POST['search'];
if(!empty($search)) {
  $query = "SELECT * FROM tbl_productos WHERE nombre_producto LIKE '$search%'";
  $result = mysqli_query($connection, $query);
  
  if(!$result) {
    die('Query Error' . mysqli_error($connection));
  }
  
  $json = array();
  while($row = mysqli_fetch_array($result)) {
    $json[] = array(
      'nombre_producto' => $row['nombre_producto'],
      'categoria' => $row['categoria'],
      'url_imagen' => $row['url_imagen'],
      'precio' => $row['precio'],
      'descripcion' => $row['descripcion'],
      'id' => $row['id']
    );
  }
  $jsonstring = json_encode($json);
  echo $jsonstring;
}

?>
