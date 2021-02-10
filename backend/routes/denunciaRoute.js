module.exports = (app) => {
    
    app.post('/faleconosco/denuncia', (req, res) => {

        const conteudo = req.body;
        console.log(conteudo);
        var connection = app.config.database();
        var query = app.models.denunciaModel;

        query.postDenuncia(conteudo, connection, (err, result) => {
            if(!err) {
            res.json(result);
            } else {
            console.log(err);
            };
        });
    });
};