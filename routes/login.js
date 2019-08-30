const express = require('express');
const router = express.Router();
const loginTest = 'admin';
const passwordTest = '1234';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/', (req,res) => {
  const {login, password} = req.body;

  if(login === loginTest && password === passwordTest) {
    req.session.admin = 1;
    res.redirect('/admin');
  } else {
    res.redirect('/login');
  }
})

module.exports = router;
