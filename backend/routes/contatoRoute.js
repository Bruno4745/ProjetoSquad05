module.exports = (app) => {
    
    app.post('/faleconosco/contato', (req, res) => {

        const conteudo = req.body;
        //console.log(conteudo);
        var connection = app.config.database();
        var query = app.models.contatoModel;

        query.postContato(conteudo, connection, (err, result) => {
            if(!err) {
            res.json(result);
            } else {
            console.log(err);
            };
        });
    });
};