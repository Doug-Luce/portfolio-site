const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

require('dotenv').config();

console.log(process.env.PORT);
app.use( express.static(`${__dirname}/../build`));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/images'));
});

const listener = app.listen(port, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});