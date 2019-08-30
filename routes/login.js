const express = require('express');
const router = express.Router();
const User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/', async (req,res) => {
  const {login, password} = req.body;

  if(!login || !password)
  {
    console.log('Error')
    res.redirect('/login')
  }

  const user = await User.findOne({ login }).select("+password");

  if(!user || !(await user.correctPassword(password, user.password))) {
    console.log('Error')
    res.redirect('/login')
  }

  req.session.admin = 1;
  res.redirect('/admin');
})

module.exports = router;
