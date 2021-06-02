const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'site', 'index.html'));
});

router.get('/:categoria', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'site', 'index.html'));
});

router.get('/anuncio/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'site', 'index.html'));
});

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'site', 'index.html'));
});

router.get('/login-admin', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'site', 'index.html'));
});

router.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'site', 'index.html'));
});

router.get('/esquecisenha', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'site', 'index.html'));
});

router.get('/depoimentos', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'site', 'index.html'));
});

router.get('/cotacao-novilha', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'site', 'index.html'));
});

router.get('/cotacao-boigordo', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'site', 'index.html'));
});

router.get('/alterarsenha/:token', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'site', 'index.html'));
});

router.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'admin', 'index.html'));
});

router.get('/admin/:token', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'admin', 'index.html'));
});

router.get('admin/usuarios', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'admin', 'index.html'));
});

router.get('admin/sliders', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'admin', 'index.html'));
});

router.get('admin/categorias', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'admin', 'index.html'));
});

router.get('admin/categorias/categoria', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'admin', 'index.html'));
});

router.get('admin/categorias/categoria/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'admin', 'index.html'));
});

router.get('admin/idades', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'admin', 'index.html'));
});

router.get('admin/unidades', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'admin', 'index.html'));
});

router.get('admin/pelagems', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'admin', 'index.html'));
});

router.get('admin/andrologias', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'admin', 'index.html'));
});

router.get('admin/pesos', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'admin', 'index.html'));
});

router.get('admin/litros', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'admin', 'index.html'));
});

router.get('admin/registros', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'admin', 'index.html'));
});

router.get('admin/depoimentos', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'admin', 'index.html'));
});

router.get('/admin-usuario', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'adminuser', 'index.html'));
});

router.get('/admin-usuario/:token', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'adminuser', 'index.html'));
});

router.get('admin-usuario/perfil', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'adminuser', 'index.html'));
});

router.get('admin-usuario/anuncios', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'adminuser', 'index.html'));
});

router.get('admin-usuario/anuncio', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'adminuser', 'index.html'));
});

router.get('admin-usuario/anuncio-detalhes', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'adminuser', 'index.html'));
});

router.get('admin-usuario/anuncio-video-fotos/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'adminuser', 'index.html'));
});

router.get('admin-usuario/animais', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'adminuser', 'index.html'));
});

module.exports = router;
