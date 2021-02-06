const app = require('./config/server')

const port = 5000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});