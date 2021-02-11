module.exports = () => {

    this.getProcurarAjuda = (connection, callback) => {
      connection.query(
        "SELECT * FROM parceiros", callback
      );
    };
  
    this.postProcurarAjuda = (conteudo, connection, callback) => {
      connection.query(
        "INSERT INTO parceiros SET ?", conteudo, callback
      );
    };

    this.putProcurarAjuda = (conteudo, id, connection, callback) => {
      console.log(conteudo)
        connection.query(
          `UPDATE parceiros SET ? WHERE id_parceiros = ${id}`, conteudo, callback
        );
    };

    this.deleteProcurarAjuda = (id, connection, callback) => {
        connection.query(
          "DELETE FROM parceiros WHERE id_parceiros = ?", id, callback
        );
    };
  
    return this;
};