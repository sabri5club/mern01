const mongoose = require('mongoose');

const CommandeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    nom: {
        type:String,
        required: true
    },
    reference: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: false
    },
    alerte: {
        type:String,
        required: false
    },
    montant: {
        type:String,
        required: false
    },
    numero: {
        type:Number,
        required: false
    },
    email: {
        type:String,
        required: true,
        unique: false
    },
    transporteur: {
        type:String,
        required: true,
        unique: false
    },
    date: {
        type: Date,
        default:Date.now
    },

});

module.exports = Commande = mongoose.model('commande',CommandeSchema)