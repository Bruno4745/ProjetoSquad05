<?php

require_once "conexao.php";

    $id = $_GET['id'];

    echo $id;

    $sql = "DELETE FROM parceiros WHERE id_parceiros = $id;";
    nonquery($sql);

    header("Location: http://localhost:3000/procurarAjuda");

?>