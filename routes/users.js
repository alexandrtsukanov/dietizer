const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const Entry = require('../models/entries.js');

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/signuppage', async (req, res) => {
  let { email, login, password } = req.body;
  let userDb = new User({ email, login, password });
  await userDb.save();
  let checkLogin = await User.findOne({ login });
  let checkEmail = await User.findOne({ email });
  if (checkLogin) {
    return res.send('Login is used')
  } else {
    if (checkEmail) {
      return res.send('Email is used')
    } else {
      return res.redirect('/users/login');
    }
  }
});

router.post('/loginpage', async (req, res) => {
  let { login, password } = req.body;
  let newUserLogin = await User.findOne({ login });
  if (newUserLogin) {
    if (password === newUserLogin.password) {
      req.session.username = newUserLogin.login;
      return res.redirect('/users/userpage');
    } else {
      return res.send('Incorrect password')
    }
  } else {
    return res.send('There is no such user')
  }
});

router.get('/userpage', async (req, res) => {
  let userWhoLoggedIn = req.session.username;
  let allEntries = await Entry.find();
  res.render('userpage', { allEntries, userWhoLoggedIn });
});

router.post('/logoutfromsignuppage', (req, res) => {
  req.session.destroy();
  res.redirect('/users/signup');
});

router.post('/logoutfromloginpage', (req, res) => {
  req.session.destroy();
  res.redirect('/users/login');
});

module.exports = router;
