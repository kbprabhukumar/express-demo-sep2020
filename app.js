
const express = require('express'); //mvc framework expressJS
const app = express(); // get a referecnes of express and assign to app variable

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('App running on port %s', port);
});

/* http://localhost:8080/ */
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

/* http://localhost:8080/login */
app.post('/login', (req, res) => {
    res.end('Login Success -1!');
});


/* http://localhost:8080/products */
app.get('/products', (req, res) => {

});