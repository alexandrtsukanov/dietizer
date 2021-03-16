const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const Entry = require('../models/entries.js');

router.post('/new', async (req, res) => {
  if (req.session.username) {
    let { entry } = req.body;
    let newEntry =  new Entry({ author: req.session.username, entry: entry });
    await newEntry.save();
    return res.redirect('/entries/all');
  } else {
    return res.send('You are not logged in')
  }
});

router.get('/all', async (req, res) => {
  let allEntries = await Entry.find();
  console.log(allEntries);
  let userWhoLoggedIn = req.session.username;
  res.render('userpage', { allEntries, userWhoLoggedIn });
});

router.post('/logoutfromuserpage', (req, res) => {
  req.session.destroy();
  res.redirect('/entries/all');
});

router.post('/addlike', async (req, res) => {
  if (req.session.user) {
  let user = await User.findOne({ login: req.session.username });
  let entry = await Entry.findOne({ _id: postId });
  if (!entry.usersLiked.includes(user._id)) {
    user.entriesLiked.push(entry._id);
    entry.usersLiked.push(user._id);
    await user.save();
    await entry.save();
    let countLikes = entry.usersLiked.length;
    res.send({ countLikes });
  } else {
    let countLikes = entry.usersLiked.length;
  }
} else {
  res.send('You are not logged in');
}
});

// router.post('/test', (req, res) => {
//   console.log('Test');
//   res.send('Test');
// });

router.post('/edit/:id', async (req, res) => {
  let entryToEdit = await Entry.findOne({ _id: req.params.id });
  res.render('edit',{ entryToEdit });
});

router.post('/edit/:id', async (req, res) => {
  console.log('TUT?????');
  let entryToEdit = await Entry.findOne({ _id: req.params.id });
  if (entryToEdit.author === req.session.username) {
    return res.redirect(`/entries/edit/${req.params.id}`);
  } else {
    return res.send('It is not yor post')
  }
});

router.post('/edit', async (req, res) => {
  console.log('GDE')
  if (req.session.username) {
    let { entry } = req.body;
    let newEntry =  new Entry({ author: req.session.username, entry: entry });
    await newEntry.save();
    return res.redirect('/entries/all');
  } else {
    return res.send('It is not yor post');
  }
});

router.post('/delete/:id', async (req, res) => {
  console.log('DELETE');
  let entryToDelete = await Entry.findOne({ _id: req.params.id });
  if (entryToDelete.author === req.session.username) {
    await deleteOne({ _id: req.params.id });
    return res.redirect('/entries/all');
  } else {
    return res.send('It is not your post');
  }
});

module.exports = router
