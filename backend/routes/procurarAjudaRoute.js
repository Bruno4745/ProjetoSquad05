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
    
    // app.put('/procurarAjuda/:id' , (req, res) => {

    //     const id = req.params.id;
    //     console.log(id);

    //     var connection = app.config.database();
    //     var query = app.models.procurarAjudaModel;

    //     query.putProcurarAjuda(id, conteudo, connection, (err, result) => {
    //         if(!err) {
    //         res.json(result);
    //         } else {
    //         console.log(err);
    //         };
    //     });
    // });

    // app.delete('/procurarAjuda/:id', (req, res) => {

    //     const id = req.params.id;
    //     console.log(id);

    //     var connection = app.config.database();
    //     var query = app.models.procurarAjudaModel;

    //     query.deleteProcurarAjuda(id, connection, (err, result) => {
    //         if(!err) {
    //         res.json(result);
    //         } else {
    //         console.log(err);
    //         };
    //     });
    // });
};