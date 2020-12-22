<?php

    header("Access-Control-Allow-Origin:*");

    require_once "../actions/conexao.php";

    if($_SERVER['REQUEST_METHOD'] === 'GET'){

        $sql = "SELECT * FROM depoimentos;";
        $resultado = query($sql);
        $depoimentos = [];

        while($row = mysqli_fetch_assoc($resultado)){
            $depoimentos[] = $row;
        }

        echo json_encode($depoimentos); 

    } else if($_SERVER['REQUEST_METHOD'] === 'POST'){
        
        $depoimento = $_POST['depoimento'];

        $sql = "INSERT INTO depoimentos (depoimento) VALUES ('$depoimento');";
            
        nonquery($sql);
    }

?>