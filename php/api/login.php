<?php
    header("Access-Control-Allow-Origin:*");

    require_once "../actions/conexao.php";

        $email = $_GET['email'];
        $senha = $_GET['senha'];

        $sql = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha';"; 
        $result = query($sql);
        $usuario = mysqli_fetch_assoc($result);

        if($usuario){ 
            header("location: https://projeto-squad05.vercel.app/procurarAjudaAdm");
        } else {
            header("location: https://projeto-squad05.vercel.app/procurarAjuda");
        }
    ?>