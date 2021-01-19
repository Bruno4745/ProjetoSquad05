<?php

require_once "conexao.php";

    $id = $_GET['id'];
    $nome = $_POST['nome'];
    $cidade = $_POST['cidade'];
    $telefone = $_POST['telefone'];

    echo $id, $nome, $cidade, $telefone;

    $sql = "UPDATE parceiros SET nome='$nome', cidade='$cidade', telefone='$telefone' WHERE id_parceiros = $id;";
    nonquery($sql);

    header("Location: http://localhost:3000/procurarAjuda");

?>