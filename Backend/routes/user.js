const router = require('express').Router()
const User = require('../models/userModel.js');
const auth = require('../middleware/auth.js');


router.post('/register', async (req, res) => {
    const user = new User(req.body)
    try {
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        if (!user) {
            return res.status(401).send({ error: 'Ups, Login failed!' });
        }
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});

router.get('/logout', auth, async (req, res) => {
    try {
      req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token);
      await req.user.save();
      res.status(200).send({message:"Logged out successfully"})
    } catch (err) {
      res.status(401).send
    }
});

/*
router.post('/activation', userCtrl.activateEmail)

router.post('/login', userCtrl.login)

router.post('/refresh_token', userCtrl.getAccessToken)

router.post('/forgot', userCtrl.forgotPassword)

router.post('/reset', auth, userCtrl.resetPassword)

router.get('/infor', auth, userCtrl.getUserInfor)

router.get('/all_infor', auth, authAdmin, userCtrl.getUsersAllInfor)

router.get('/logout', userCtrl.logout)

router.patch('/update', auth, userCtrl.updateUser)

router.patch('/update_role/:id', auth, authAdmin, userCtrl.updateUsersRole)

router.delete('/delete/:id', auth, authAdmin, userCtrl.deleteUser)
*/


module.exports = router