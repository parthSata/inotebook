const connectToMongo = require('./db');
const express = require('express');

connectToMongo();
const app = express();
const port = 27017;

app.get('/', (req, res) => {
  res.send('Hello Harry!');
});

app.use('/api/auth', require('./Routes/auth')),
app.use('/api/notes', require('./Routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
