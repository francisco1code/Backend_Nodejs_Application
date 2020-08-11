const express = require("express");

const server = express();

server.get('/t', (req,res) => {
    return res.send('welcome!');
});

server.listen(3000);