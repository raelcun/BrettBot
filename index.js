const express = require('express')
const app = express();

app.get('/brettfact', require('./routes/brettFact'));
app.get('/brettNorris', require('./routes/brettNorris'))

app.listen(5000, function() { console.log('App is running'); });
