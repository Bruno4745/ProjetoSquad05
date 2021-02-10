module.exports = (app) => {

    app.get('/faleconosco/depoimento', (req, res) => {

        var connection = app.config.database();
        var query = app.models.depoimentoModel;

        query.getDepoimento(connection, (err, result) => {
            if(!err) {
                res.json(result);
            } else {
                console.log(err);
            };
        });
    });
    
    app.post('/faleconosco/depoimento', (req, res) => {

        const conteudo = req.body;
        //console.log(conteudo);
        var connection = app.config.database();
        var query = app.models.depoimentoModel;

        query.postDepoimento(conteudo, connection, (err, result) => {
            if(!err) {
            res.json(result);
            } else {
            console.log(err);
            };
        });
    });
};