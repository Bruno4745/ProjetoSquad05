<?php

require_once "conexao.php";
    
    $botao = $_POST['botao'];

    if($botao == 'Excluir'){
        $id = $_GET['id'];
        $sql = "DELETE FROM parceiros WHERE id_parceiros = $id;";
        nonquery($sql);
    }

    header("Location: https://projeto-squad05.vercel.app/procurarAjudaAdm");

?>