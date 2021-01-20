<?php

    header("Access-Control-Allow-Origin:*");

    require_once "../actions/conexao.php";

    if($_SERVER['REQUEST_METHOD'] === 'GET'){

        $sql = "SELECT * FROM parceiros
        INNER JOIN cidade_parceiros
        ON parceiros.id_cidade = cidade_parceiros.idcidade_parceiros
        INNER JOIN estado_parceiros
        ON estado_parceiros.idestado_parceiros = parceiros.id_estado ;";
        $resultado = query($sql);
        $parceiro = [];

        while($row = mysqli_fetch_assoc($resultado)){
            $parceiro[] = $row;
        }

        echo json_encode($parceiro); 
    } else if($_SERVER['REQUEST_METHOD'] === 'POST'){
        
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

        //PEGAR ID DA CIDADE
        $sql = "SELECT idcidade_parceiros FROM cidade_parceiros WHERE cidade = '$cidade'";
        $resultado = query($sql);
        $parceiro = [];
        while($row = mysqli_fetch_assoc($resultado)){
            $parceiro[] = $row;
        }
        $json = json_encode($parceiro); 
        $obj = json_decode($json);
        foreach($obj as $registro):
            $id_cidade = $registro->idcidade_parceiros;
        endforeach;
        //FIM

        //PEGAR ID DO ESTADO
        $sql2 = "SELECT idestado_parceiros FROM estado_parceiros WHERE estado = '$estado'";
        $resultado = query($sql2);
        $parceiro2 = [];
        while($row = mysqli_fetch_assoc($resultado)){
            $parceiro2[] = $row;
        }
        $json = json_encode($parceiro2); 
        $obj = json_decode($json);
        foreach($obj as $registro):
            $id_estado = $registro->idestado_parceiros;
        endforeach;
        //FIM


        //FAZER INSERT NA TABELA DE PARCEIROS
        $sql3 = "INSERT INTO parceiros (categoria, nome, logradouro, numero, complemento, id_cidade, id_estado, cep, contato, telefone, email, site_parceiro) 
        VALUES ('$categoria', '$nome', '$logradouro', $numero, '$complemento', '$id_cidade', '$id_estado', '$cep', '$contato', '$telefone', '$email', '$site');";
        nonquery($sql3);
    }
?>