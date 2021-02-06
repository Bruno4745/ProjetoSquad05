module.exports = () => {
  this.getSquad = (connection, callback) => {
    connection.query(
      "select * from squad", callback
    );
  };
  return this;
};