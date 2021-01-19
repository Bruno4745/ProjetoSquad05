<?php

    header("Access-Control-Allow-Origin:*");

    require_once "../actions/conexao.php";

    if($_SERVER['REQUEST_METHOD'] === 'GET'){

        $sql = "SELECT * FROM parceiros;";
        $resultado = query($sql);
        $parceiro = [];

        while($row = mysqli_fetch_assoc($resultado)){
            $parceiro[] = $row;
        }

        echo json_encode($parceiro); 
    } 
?>