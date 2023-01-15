const express = require('express')
const router = new express.Router()
const Child = require('../models/child.js')

router.post('/addChild')((req, res) => {
    const school = req.body.school;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const klasse = req.body.klasse;
    const teacher = req.body.teacher;
    const email = req.body.email;

    const newChild = new Child ({
        school,
        fname,
        lname,
        klasse,
        teacher,
        email
    });
    newChild.save();
})

router.get("/addedChildInfos")((req, res) => {
    Child.find()
        .then(foundChild => res.json(foundChild))
})



module.exports = router;