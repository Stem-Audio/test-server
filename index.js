//Validation
const Joi = require('joi'); 
// Web Server
const express = require('express');
const app = express();


app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/api/users', (req, res) => {
	res.send([1, 2, 3]);
});


// request of params
// app.get('/api/users/:id', (req, res) => {
//	res.send(req.params.id);
// });


// PORT 
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));