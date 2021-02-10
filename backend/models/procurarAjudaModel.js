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

    // this.putProcurarAjuda = (id, conteudo, connection, callback) => {
    //     connection.query(
    //       "UPDATE parceiros SET ?", conteudo, callback
    //     );
    // };

    // this.deleteProcurarAjuda = (id, conteudo, connection, callback) => {
    //     connection.query(
    //       "DELETE FROM parceiros WHERE id_parceiros = ?", id, callback
    //     );
    // };
  
    return this;
};