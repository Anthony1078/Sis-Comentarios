const mongoose = require('mongoose');

const ComentarioSchema = mongoose.Schema( {
    nombre: {
        type: String,
        required: true
    },
    comentario: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Comentario', ComentarioSchema);