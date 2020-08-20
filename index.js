const express = require("express");

const server = express();

server.use(express.json());

const cursos = ['nodejs', 'php','react'];

server.get('/cursos:index', (req,res) => {
    return res.json(cursos);
});

server.post('/cursos', (req, res) => {
    const { nome } = req.body;
    cursos.push(nome);

    return  res.json(cursos);
});

server.put('/cursos/:index', (req,res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
})

server.delete('/cursos/:index', (req, res) => {
    const { index } = req.params;

    cursos.splice(index, 1);

    return res.json(cursos);
})


server.get('/', (req, res) => {
    return res.json("Welcome")
});

server.listen(3000);