const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
routes(app);

app.listen(port, function() {
  console.log('Server running on port: ' + port);
});
