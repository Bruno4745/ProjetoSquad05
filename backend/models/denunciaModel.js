module.exports = () => {

  this.postDenuncia = (conteudo, connection, callback) => {
    connection.query(
      "INSERT INTO denuncia SET ?", conteudo, callback
    );
  };

  return this;
};