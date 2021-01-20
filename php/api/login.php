<?php
    header("Access-Control-Allow-Origin:*");

    require_once "../actions/conexao.php";

        $email = $_GET['email'];
        $senha = $_GET['senha'];

        $sql = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha';"; 
        $result = query($sql);
        $usuario = mysqli_fetch_assoc($result);

        if($usuario){ 
            header("location: http://localhost:3000/procurarAjudaAdm");
        } else {
            header("location: http://localhost:3000/procurarAjuda");
        }
    ?>