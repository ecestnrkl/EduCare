const express = require('express');
const { default: mongoose } = require('mongoose');
const router = new express.Router();
const User = require('../models/model.js');
const { authenticate } = require("../middlewares/auth.js");


router.post('/users', async function (req, res) {
    //Neuen User eintragen
    const user = new User(req.body);
    try {
        await user.save();
        const token = await user.generateToken();
        res.status(201);
        res.send(user);
    } catch (e) {
        res.status(406).send(e)
    }
});


router.post('/users/login', async function (req, res) {
    //User einloggen
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        res.status(201).send("Dein Token: " + user[0].token);
    } catch (e) {
        res.status(401).send(e.message)
    }
});

// router.post('/users/logout', authenticate, async function (req, res) {
//     //Logout
//     try {
//         const { token } = req.body;
//         const user = await User.findOneAndUpdate({ tokens: token }, { $pull: { tokens: { token } } });
//         res.status(200).send('BYE.')
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

router.post('/users/logout', async (req, res) => {
    //User ausloggen
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token;
        });
        await req.user.save();
        res.send();
    } catch (err) {
        res.status(404).send(err);
    }
});



router.get('/users/profile', authenticate , function (req, res) {
    // Eingeloggten User ausgeben
    res.json({
        isAuth: true,
        id: req.user._id,
        email: req.user.email,
        name: req.user.name
    })
});



router.get('/users', async function (req, res) {
    //Alle Daten herausgeben
    User.find({}, function (err, users) {
        if (err) {
            return req.send("Keine Nutzer vorhanden.");
        }
        return res.json(users);
    });
})

router.get("/users/:id", function (req, res) {
    //Daten eines Users anhand von der ID herausgeben
    User.findById(req.params.id)
        .then(users => {
            if (!users) { return res.status(404).end(); }
            return res.status(200).json(users);
        })
        .catch(err => next(err));
})

router.delete('/users/:id', async function (req, res) {
    // Nutzerdaten durch die ID löschen 
    const id = req.params.id;
    if (mongoose.Types.ObjectId.isValid(id)) {
        try {
            await User.deleteOne({ _id: id });
            return res.send("Nutzer wurde erfolgreich gelöscht.");
        } catch (error) {
            return res.status(400).send(error.message);
        }
    } else {
        return res.status(403).send("Ungültige user id");
    }
});

router.patch('/users/:id', async function (req, res) {
    //Eintrag mit neuen Daten aktualisieren
    try {
        const users = await User.findById(req.params.id);
        Object.assign(users, req.body);
        users.save();
        res.send({ data: users });
    } catch {
        res.status(404).send({ error: "Nutzer nicht gefunden." })
    }
});


module.exports = router