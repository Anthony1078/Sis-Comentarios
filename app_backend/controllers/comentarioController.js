const Comentario = require('../models/Comentario');

exports.crear = async (req, res) => {

    try {
        let comentario;

        //guardamos nuestro comentario
        comentario = new Comentario(req.body);

        await comentario.save();
        res.send(comentario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al guardar comentario');
    }
}

exports.obtener = async (req, res) => {
     try {

        const comentarios = await Comentario.find();
        res.json(comentarios);

     } catch (error) {
         console.log(error);
         res.status(500).send('error al obtener los comentarios');
     }
}

exports.eliminar = async (req, res) => {
    
    try {

        let comentario = await Comentario.findById(req.params.id);

        if( !comentario ) {
            res.status(404).json( { msg: 'No existe el comentario'});
        }

        await Comentario.findOneAndRemove({ _id: req.params.id});
        res.json( { mensaje: 'Comentario eliminado correctamente'});
        
    } catch (error) {
        console.log(error);
        res.status(500).send('error al eliminar el comentarios');
    }
}