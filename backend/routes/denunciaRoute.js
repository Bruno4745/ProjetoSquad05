const bcrypt = require('bcryptjs');

module.exports = (app) => {
    
    app.post('/faleconosco/denuncia', (req, res) => {

        const conteudo = req.body;
        // console.log(conteudo);
        var sal = bcrypt.genSaltSync(10); 
        var hash = bcrypt.hashSync(conteudo.mensagem, sal);
        conteudo.mensagem = hash;
        var hash = bcrypt.hashSync(conteudo.horario, sal);
        conteudo.horario = hash;
        // console.log(conteudo);
        
        var connection = app.config.database();
        var query = app.models.denunciaModel;
        
        query.postDenuncia(conteudo, connection, (err, result) => {
            if(!err) {
            res.json(result);
            } else {
            console.log(err);
            };
            console.log(conteudo);
        });
    });
};