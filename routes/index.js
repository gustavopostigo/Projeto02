const express = require('express');
//Rotas (quando o servidor for acessado, para onde ele vai?)
const router = express.Router();

router.get('/', (req,res) => {
    let obj = {
        nome : req.query.nome,
    };
    res.render('home', obj);
    });

module.exports = router;