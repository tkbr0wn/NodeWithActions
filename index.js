const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("connected to mongodb");

})
.catch((error) => {
    console.error("Error connecting to MongoDB");
})

app.listen(port, () => {
    console.log('server is listenting on port: '+ port)
})

app.get('/hello', (req, res) => {
    res.json({message: "Hello, Testers Actions Working"})
});
