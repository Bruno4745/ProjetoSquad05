<?php

    header("Access-Control-Allow-Origin:*");

    require_once "../actions/conexao.php";

    if($_SERVER['REQUEST_METHOD'] === 'GET'){

        $sql = "SELECT * FROM denuncia;";
        $resultado = query($sql);
        $denuncia = [];

        while($row = mysqli_fetch_assoc($resultado)){
            $denuncia[] = $row;
        }

        echo json_encode($denuncia); 

    } else if($_SERVER['REQUEST_METHOD'] === 'POST'){
        
        $nome_do_estabelecimento = $_POST['nome_do_estabelecimento'];
        $endereco = $_POST['endereco'];
        $horario = $_POST['horario'];
        $mensagem = $_POST['mensagem'];

        $sql = "INSERT INTO denuncia (`nome_do_estabelecimento`, `endereco`, `horario`, `mensagem`) VALUES (`$nome_do_estabelecimento`, `$endereco`, `$horario`, `$mensagem`);";
            
        nonquery($sql);
    }

?>