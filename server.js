const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`<h2>This is How we can Create an Express Server.</h2>`);
});

app.listen(333, console.log('Server started on Port 333'));
