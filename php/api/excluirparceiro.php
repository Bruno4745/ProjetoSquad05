<?php

    require_once "../actions/conexao.php";

    if(isset($_GET['id'])){
        $id = $_GET['id'];
        $sql = "SELECT * FROM parceiros
        INNER JOIN cidade_parceiros
        ON parceiros.id_cidade = cidade_parceiros.idcidade_parceiros
        INNER JOIN estado_parceiros
        ON estado_parceiros.idestado_parceiros = parceiros.id_estado
        WHERE parceiros.id_parceiros = $id LIMIT 1";
        $resultado = query($sql);
        while($row=mysqli_fetch_assoc($resultado)){
?>
<html>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
</head>
<body>
    <div class="container col-6">
        <div class="form">
            <form method="POST" action="../actions/excluirparceiro.php?id=<?php echo $row['id_parceiros'] ?>">
                <h4> EXCLUIR </h4>
                <div class="form-group">
                    <label for="id">ID: </label>
                    <input value="<?php echo $row['id_parceiros'] ?>" type="text" class="form-control" id="id_parceiros" name="id_parceiros" readonly>
                </div>
                <div class="form-group">
                    <label for="categoria">Categoria: </label>
                    <input value="<?php echo $row['categoria'] ?>" type="text" class="form-control" id="categoria" name="categoria">
                </div>
                <div class="form-group">
                    <label for="nome">Nome: </label>
                    <input value="<?php echo $row['nome'] ?>" type="text" class="form-control" id="nome" name="nome">
                </div>
                <div class="form-group">
                    <label for="logradouro">Logradouro: </label>
                    <input value="<?php echo $row['logradouro'] ?>" type="text" class="form-control" id="logradouro" name="logradouro">
                </div>
                <div class="form-group">
                    <label for="numero">Numero: </label>
                    <input value="<?php echo $row['numero'] ?>" type="text" class="form-control" id="numero" name="numero">
                </div>
                <div class="form-group">
                    <label for="complemento">Complemento: </label>
                    <input value="<?php echo $row['complemento'] ?>" type="text" class="form-control" id="complemento" name="complemento">
                </div>
                <div class="form-group">
                    <label for="cidade">Cidade: </label>
                    <input value="<?php echo $row['cidade'] ?>" type="text" class="form-control" id="cidade" name="cidade">
                </div>
                <div class="form-group">
                    <label for="estado">Estado: </label>
                    <input value="<?php echo $row['estado'] ?>" type="text" class="form-control" id="estado" name="estado">
                </div>
                <div class="form-group">
                    <label for="cep">Cep: </label>
                    <input value="<?php echo $row['cep'] ?>" type="text" class="form-control" id="cep" name="cep">
                </div>
                <div class="form-group">
                    <label for="contato">Contato: </label>
                    <input value="<?php echo $row['contato'] ?>" type="text" class="form-control" id="contato" name="contato">
                </div>
                <div class="form-group">
                    <label for="telefone">Telefone: </label>
                    <input value="<?php echo $row['telefone'] ?>" type="text" class="form-control" id="telefone" name="telefone">
                </div>
                <div class="form-group">
                    <label for="email">Email: </label>
                    <input value="<?php echo $row['email'] ?>" type="text" class="form-control" id="email" name="email">
                </div>
                <div class="form-group">
                    <label for="site">Site: </label>
                    <input value="<?php echo $row['site_parceiro'] ?>" type="text" class="form-control" id="site" name="site">
                </div>
                <button class="btn btn-danger mt-3" type="submit" name="botao" value="Excluir">Excluir</button>
                <button class="btn btn-primary mt-3" type="submit" name="botao" value="Voltar">Voltar</button>
            </form>
        </div>
    </div>
    <?php
    }
}?>
    </body>
    </html>