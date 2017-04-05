const data = require('./data');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/api/getdata', data.getData);
app.get('/api/getlessons', data.getLessons);

app.listen(3044, function () {
    console.log('listening on port 3044');
})
