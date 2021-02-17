const app = require('./config/server')
const server = require('./config/serverChat')

const port = 5000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
server.listen(5001, () => {
  console.log(`Server chat running at http://localhost:5001`);
});