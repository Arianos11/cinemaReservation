const express = require('express');
const router = express.Router();

router.all('*', (req, res, next) => {
  if(!req.session.admin) {
      return res.redirect('login');
  }

  next();
})

/* GET home page. */
router.get('/', (req, res) => {
  res.render('admin/index', { title: 'Admin' });
});

module.exports = router;
