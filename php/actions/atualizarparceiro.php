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

        //echo $id, $nome, $cidade, $telefone;

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

        $sql = "UPDATE parceiros SET categoria='$categoria', nome='$nome', logradouro='$logradouro', numero='$numero', complemento='$complemento', id_cidade='$id_cidade', id_estado='$id_estado', cep='$cep', contato='$contato', telefone='$telefone', email='$email', site_parceiro='$site' WHERE id_parceiros = $id;";
        nonquery($sql);
    }
        header("Location: https://projeto-squad05.vercel.app/procurarAjudaAdm");
?>