<?php

    require_once "../actions/conexao.php";

    if(isset($_GET['id'])){
        $id = $_GET['id'];
        $sql = "SELECT * FROM parceiros WHERE id_parceiros = $id LIMIT 1";
        $resultado = query($sql);
        while($row=mysqli_fetch_assoc($resultado)){
?>
<html>
<body>
    <div class="container-fluid">
        <div class="row">
            <form method="POST" action="../actions/atualizarparceiro.php?id=<?php echo $row['id_parceiros'] ?>" class="col-md-4 mx-auto">
                <h4> Atualização de Parceiro </h4>
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
                    <input value="<?php echo $row['site'] ?>" type="text" class="form-control" id="site" name="site">
                </div>
                <button type="submit" name="botao" value="Alterar">Alterar</button>
                <button type="submit" name="botao" value="Voltar">Voltar</button>
            </form>
        </div>
    </div>
    <?php }
    }?>
    </body>
    </html>