const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'site', 'index.html'));
});

router.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'admin', 'index.html'));
});

router.get('/admin-usuario', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'adminuser', 'index.html'));
});

module.exports = router;
