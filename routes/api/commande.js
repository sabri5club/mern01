const express = require ('express');
const router = express.Router();
const auth = require ('../../middleware/auth');

const Commande = require('../../models/Commande');
const User = require('../../models/User');
const {check, validationResult} = require('express-validator');



// @route GET api/commande/me
//@desc Test route 
//@access Private
router.get('/moi',auth, async(req,res) => {


try {
    const commande = await Commande.findOne({user: req.user.id}).populate('user', ['name', 'avatar']);

    if(!commande) {
        return res.status(400).json({msg: 'il n\'y a pas de commande pour cet utilisateur'})
    }

    res.json(commande);

}catch(err) {
    console.error(err.message);
    res.status(500).send('Server Error');
}
});

// @route poste api/commande/me
//@desc Create or update commande 
//@access Private

router.post('/', [
     auth, 
    [check('nom', 'nom est requis')
    .not()
    .isEmpty(),
    check('alerte', 'alerte est requis')
    .not()
    .isEmpty(),

]], async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

   const {

    nom,
    reference,
    description,
    alerte,
    montant,
    numero,
    email,
    transporteur,
    date,

} = req.body;

//Build commande object

const commandeFields = {};

commandeFields.user = req.user.id;

if(nom) commandeFields.nom = nom;
if(reference) commandeFields.reference = reference;
if(description) commandeFields.description = description;
if(alerte) commandeFields.alerte = alerte;
if(montant) commandeFields.montant = montant;
if(numero) commandeFields.numero = numero;
if(email) commandeFields.email = email;
if(transporteur) commandeFields.transporteur = transporteur;
if(date) commandeFields.date = date;

try {

    let commande = await Commande.findOne({ user: req.user.id});

    if(commande) {
        commande = await Commande.findOneAndUpdate(
            {user: req.user.id}, 
            {$set: commandeFields}, 
            {new: true}
            );

        return res.json(commande);

    }

    // Création d'une nouvelle commande

    commande = new Commande(commandeFields);

    await commande.save();
    res.json(commande);


}catch(err) {
    console.error(err.message);
    res.status(500).send('Server Error');
}

}

);

// @route get api/commande
//@desc get all commande 
//@access Public

router.get('/', async(req, res)=> {
    try {
        const commandes= await Commande.find().populate('user', ['name', 'avatar']);
        res.json(commandes)
    }catch(err) {
        res.status(500).send('server error');
    }
});

// @route get api/commande/user/:user_id
//@desc get all commande  by user id
//@access Public

router.get('/user/:user_id', async(req, res)=> {
    try {
        const commande= await Commande.findOne({user: req.params.user_id}).populate('user', ['name', 'avatar']);

        if(!commande) return res.status(400).json({msg:'cet utilisateur n\'a pas créer de commande encore'})

        res.json(commande)
    }catch(err) {
        console.error(err.message);
        if(err.kind == 'ObjectId') {
            return res.status(400).json({msg:'cet utilisateur n\'a pas créer de commande encore'})
        }
        res.status(500).send('server error');
    }
});

    // @route delete api/commande
//@desc delete commande, user
//@access Private

router.delete('/', auth, async(req, res)=> {
    try {

        //remove commande
        await Commande.findOneAndRemove({user: req.user.id});

        await User.findOneAndRemove({_id: req.user.id});

        res.json({msg: 'User removed'})
    }catch(err) {
        res.status(500).send('server error');
    }
});


module.exports = router;