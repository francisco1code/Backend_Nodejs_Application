const express = require("express");

const server = express();

server.get('/t', (req,res) => {
    return res.json({
        curso: 'Nodejs'
    })
});

server.listen(3000);