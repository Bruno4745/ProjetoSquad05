module.exports = (app) => {

    app.get('/procurarAjuda', (req, res) => {

        var connection = app.config.database();
        var query = app.models.procurarAjudaModel;

        query.getProcurarAjuda(connection, (err, result) => {
            if(!err) {
                res.json(result);
            } else {
                console.log(err);
            };
        });
    });
    
    app.post('/procurarAjuda', (req, res) => {

        const conteudo = req.body;
        //console.log(conteudo);
        var connection = app.config.database();
        var query = app.models.procurarAjudaModel;

        query.postProcurarAjuda(conteudo, connection, (err, result) => {
            if(!err) {
            res.json(result);
            } else {
            console.log(err);
            };
        });
    });
    
    app.put('/procurarAjuda/:id' , (req, res) => {

        const id = req.params.id;
        //console.log(id);
        const conteudo = req.body;

        var connection = app.config.database();
        var query = app.models.procurarAjudaModel;

        query.putProcurarAjuda(conteudo, id, connection, (err, result) => {
            if(!err) {
            res.json(result);
            } else {
            console.log(err);
            };
        });
    });

    app.delete('/procurarAjuda/:id', (req, res) => {

        const id = req.params.id;
        //console.log(id);

        var connection = app.config.database();
        var query = app.models.procurarAjudaModel;

        query.deleteProcurarAjuda(id, connection, (err, result) => {
            if(!err) {
            res.json(result);
            } else {
            console.log(err);
            };
        });
    });

    app.post('/fazerLogin', (req, res) => {

        var connection = app.config.database();
        var query = app.models.procurarAjudaModel;
        const conteudo = req.body;
        console.log(conteudo)

        query.getFazerLogin(conteudo, connection, (err, result) => {
            console.log(result);
            if(result.length == 1) {
                //console.log(result);
                res.sendStatus(200);
            } else {
                //console.log(result);
                res.sendStatus(404);
            };
        });
    });
};