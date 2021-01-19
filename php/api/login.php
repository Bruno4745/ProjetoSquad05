<?php
    header("Access-Control-Allow-Origin:*");

    require_once "../actions/conexao.php";


        $email = $_GET['email'];
        $senha = $_GET['senha'];

        echo $email;

        $sql = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha';"; 
        $result = query($sql);
        $usuario = mysqli_fetch_assoc($result);

        if($usuario){ 
            $_SESSION['nome'] = $usuario['nome'];
            $_SESSION['email'] = $usuario['email'];
            header("location: http://localhost:3000/procurarAjudaAdm");
        } else {
            header("location: http://localhost:3000/procurarAjuda");
        }
    
    ?>