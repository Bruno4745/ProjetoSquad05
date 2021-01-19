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
    } else if($_SERVER['REQUEST_METHOD'] === 'POST'){
        
        $categoria = $_POST['categoria'];
        $nome = $_POST['nome'];
        $logradouro = $_POST['logradouro'];
        $numero = $_POST['numero'];
        $complemento = $_POST['complemento'];
        $cidade = $_POST['cidade'];
        $estado = $_POST['estado'];
        $cep = $_POST['cep'];
        $contato = $_POST['contato'];
        $telefone = $_POST['telefone'];
        $email = $_POST['email'];
        $site = $_POST['site'];

        $sql = "INSERT INTO parceiros (nome, email) VALUES ('$nome', '$email');";
            
        nonquery($sql);
    }
?>