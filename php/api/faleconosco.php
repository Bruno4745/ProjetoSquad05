<?php

    header("Access-Control-Allow-Origin:*");

    require_once "../actions/conexao.php";

if($_SERVER['REQUEST_METHOD'] === 'POST'){
        
        $nome = $_POST['nome'];
        $mensagem = $_POST['mensagem'];
        $email = $_POST['email'];

        $sql = "INSERT INTO faleconosco (nome, mensagem, email) 
        VALUES ('$nome', '$mensagem', '$email');";
            
        nonquery($sql);
        
    }

?>