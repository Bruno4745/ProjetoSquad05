<?php
    header("Access-Control-Allow-Origin:*");

    require_once "../actions/conexao.php";
    session_start();

    if(EMPTY($_POST['email']) || EMPTY($_POST['senha'])){
    } else {

        $email = $_POST['email'];
        $senha = $_POST['senha'];

        $sql = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha';"; 
        $result = $conn->query($sql);
        $usuario = mysqli_fetch_assoc($result);

        if($usuario){ 
            $_SESSION['nome'] = $usuario['nome'];
            $_SESSION['email'] = $usuario['email'];
            header("location: ./http://localhost:3001/procurarAjuda");
            
    ?>