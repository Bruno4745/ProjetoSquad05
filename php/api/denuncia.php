<?php

    header("Access-Control-Allow-Origin:*");

    require_once "../actions/conexao.php";

<<<<<<< HEAD
   
     if($_SERVER['REQUEST_METHOD'] === 'POST'){
=======
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
>>>>>>> 80a4347031cef0ff29f905d5348d6ad4ebbe9b5d
        
        $nome_do_estabelecimento = $_POST['nome_do_estabelecimento'];
        $endereco = $_POST['endereco'];
        $horario = $_POST['horario'];
        $mensagem = $_POST['mensagem'];

<<<<<<< HEAD
        $sql = "INSERT INTO denuncia (nome_do_estabelecimento, endereco, horario, mensagem)
         VALUES ('$nome_do_estabelecimento', '$endereco', '$horario', '$mensagem');";
=======
        $sql = "INSERT INTO denuncia (nome_do_estabelecimento, endereco, horario, mensagem) VALUES ('$nome_do_estabelecimento', '$endereco', '$horario', '$mensagem');";
>>>>>>> 80a4347031cef0ff29f905d5348d6ad4ebbe9b5d
            
        nonquery($sql);
    }
?>