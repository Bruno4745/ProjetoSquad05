<?php
  header("Access-Control-Allow-Origin:*");

  require_once "../actions/conexao.php";

    $sql = "SELECT * FROM squad;";
    $resultado = query($sql);
    $squad = [];

    while($row = mysqli_fetch_assoc($resultado)){
        $squad[] = $row;
    }
    echo json_encode($squad); 
?>