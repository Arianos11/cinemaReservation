const express = require('express');
const router = express.Router();
const User = require('../models/user');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('register', { title: 'Login' });
});

router.post('/', async (req,res) => {
    const newUser = await User.create(req.body);
    // req.session.eval(newUser.login) = 1;
    res.redirect('/account');
})

module.exports = router;
