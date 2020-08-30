const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Plateforme = require("../../models/Plateforme");
const { check, validationResult } = require("express-validator");

// @route GET api/commande/me
//@desc Test route
//@access Private
router.get("/moi", auth, async (req, res) => {
  try {
    const plateforme = await Plateforme.findOne({
      user: req.user.id,
    });

    if (!plateforme) {
      return res.status(400).json({ msg: "il n'y a pas de palteforme encore" });
    }

    res.json(plateforme);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route poste api/commande/me
//@desc Create or update commande
//@access Private

// @route get api/commande
//@desc get all commande
//@access Public

router.get("/", async (req, res) => {
  try {
    const plateformes = await Plateforme.find();
    res.json(plateformes);
  } catch (err) {
    res.status(500).send("server error au niveau des platformes");
  }
});

router.post("/", async (req, res) => {

  
  

      
  
    const plateforme = new Plateforme({
        name: req.body.name
    })

    try {
    //   const plateformes = await Plateforme.find();
    //   res.json(plateformes);
    const p1= await plateforme.save()
    res.json(p1)
    } catch (err) {
      res.status(500).send("server error au niveau des platformes");
    }
  });



module.exports = router;
