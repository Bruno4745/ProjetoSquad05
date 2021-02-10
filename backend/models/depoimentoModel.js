module.exports = () => {

  this.getDepoimento = (connection, callback) => {
    connection.query(
      "SELECT * FROM depoimentos", callback
    );
  };

  this.postDepoimento = (conteudo, connection, callback) => {
    connection.query(
      "INSERT INTO depoimentos SET ?", conteudo, callback
    );
  };

  return this;
};