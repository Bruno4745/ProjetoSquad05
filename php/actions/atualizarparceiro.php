<?php

require_once "conexao.php";

    $botao = $_POST['botao'];

    if($botao == 'Alterar'){
        $id = $_GET['id'];
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

        echo $id, $nome, $cidade, $telefone;

        $sql = "UPDATE parceiros SET categoria='$categoria', nome='$nome', logradouro='$logradouro', numero='$numero', complemento='$complemento', cidade='$cidade', estado='$estado', cep='$cep', contato='$contato', telefone='$telefone', email='$email', site='$site' WHERE id_parceiros = $id;";
        nonquery($sql);
    }
        header("Location: http://localhost:3000/procurarAjudaAdm");
?>