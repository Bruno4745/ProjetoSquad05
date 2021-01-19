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
                <h4> Atualização de Produtos. </h4>
                <div class="form-group">
                    <label for="nome">Nome: </label>
                    <input value="<?php echo $row['nome'] ?>" type="text" class="form-control" id="nome" name="nome">
                </div>
                <div class="form-group">
                    <label for="cidade">Cidade: </label>
                    <input value="<?php echo $row['cidade'] ?>" type="text" class="form-control" id="cidade" name="cidade">
                </div>
                <div class="form-group">
                    <label for="telefone">Telefone: </label>
                    <input value="<?php echo $row['telefone'] ?>" type="text" class="form-control" id="telefone" name="telefone">
                </div>
                <button type="submit" class="btn btn-primary" name="atualizar">Submit</button>
            </form>
        </div>
    </div>
    <?php
    }
}?>
    </body>
    </html>