module.exports = () => {

  this.postContato = (conteudo, connection, callback) => {
    connection.query(
      "INSERT INTO contato SET ?", conteudo, callback
    );
  };
  
  return this;
};