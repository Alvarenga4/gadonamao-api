const express = require('express');
const multer = require('multer');

// import controllers
const AuthMiddleware = require('./middlewares/auth');
const AdminMiddleware = require('./middlewares/admin');
const AdminAuthController = require('./controllers/AdminAuthController');
const AdminController = require('./controllers/AdminController');
const UserAuthController = require('./controllers/UserAuthController');
const UserController = require('./controllers/UserController');
const RecoverPasswordController = require('./controllers/RecoverPasswordController');
const TokenController = require('./controllers/TokenController');
const TokenAdminController = require('./controllers/TokenAdminController');
const SliderController = require('./controllers/SliderController');
const CategoriaController = require('./controllers/CategoriaController');
const DepoimentoController = require('./controllers/DepoimentoController');
const EmailController = require('./controllers/EmailController');
const IdadeController = require('./controllers/IdadeController');
const UnidadeController = require('./controllers/UnidadeController');
const RegistroController = require('./controllers/RegistroController');
const AnuncioController = require('./controllers/AnuncioController');
const AnimalController = require('./controllers/AnimalController');
const AnimalImageController = require('./controllers/AnimalImageController');
const uploadConfig = require('./config/upload');
const CategoriaFilterController = require('./controllers/CategoriaFilterController');
const PelagemController = require('./controllers/PelagemController');
const AndrologiaController = require('./controllers/AndrologiaController');
const PesoController = require('./controllers/PesoController');
const LitroController = require('./controllers/LitroController');
const AnimalVideoController = require('./controllers/AnimalVideoController');
const ProfileController = require('./controllers/ProfileController');
const VendidoController = require('./controllers/VendidoController');
const CompartilhadoController = require('./controllers/CompartilhadoController');
const VisualizadoController = require('./controllers/VisualizadoController');
const ReportadoController = require('./controllers/ReportadoController');
const FavoritadoController = require('./controllers/FavoritadoController');

const upload = multer(uploadConfig);
const routes = express.Router();

// index
routes.get('/', (req, res) => {
  res.json({
    projeto: 'api on-line',
    method: req.method,
    hostname: req.hostname,
    ip: req.ip
  });
});

// Public Routes
// Requisições sem Token

routes.post('/authenticate', UserAuthController.authenticate);
routes.post('/admins/authenticate', AdminAuthController.authenticate);

routes.post('/users', UserController.store);

routes.get('/tokens/:token', TokenController.show);
routes.get('/tokens-admin/:token', TokenAdminController.show);

routes.post('/recoverPassword', RecoverPasswordController.store);
routes.put('/recoverPassword/:token', RecoverPasswordController.update);

routes.post('/emails', EmailController.store);

routes.get('/sliders', SliderController.index);
routes.get('/animals', AnimalController.index);
routes.get('/animals/:id', AnimalController.show);
routes.get('/anuncios', AnuncioController.index);
routes.get('/categorias', CategoriaController.index);
routes.get('/idades', IdadeController.index);
routes.get('/depoimentos', DepoimentoController.index);

routes.patch('/visualizados/:id', VisualizadoController.update);
routes.patch('/compartilhados/:id', CompartilhadoController.update);
routes.patch('/reportados/:id', ReportadoController.update);
routes.get('/favoritados/:id', FavoritadoController.show);
routes.patch('/favoritados/:id', FavoritadoController.update);

// Private Routes
// Requisições com Token
routes.use(AuthMiddleware);

routes.get('/profiles', ProfileController.show);
routes.put('/profiles/:id', upload.single('image'), ProfileController.update);

routes.post('/anuncios', AnuncioController.store);
routes.get('/anuncios/:id', AnuncioController.show);
routes.put('/anuncios/:id', AnuncioController.update);
routes.delete('/anuncios/:id', AnuncioController.delete);

routes.post('/animals', AnimalController.store);
routes.put('/animals/:id', AnimalController.update);
routes.delete('/animals/:id', AnimalController.delete);

routes.post('/images/:id/animals', upload.single('file'), AnimalImageController.store);
routes.post('/videos/:id/animals', upload.single('file'), AnimalVideoController.store);

routes.get('/categorias/:id/categorias', CategoriaFilterController.show);

routes.get('/unidades', UnidadeController.index);

routes.put('/vendidos/:id', VendidoController.update);

routes.use(AdminMiddleware);

routes.get('/admins', AdminController.index);
routes.post('/admins', upload.single('image'), AdminController.store);
routes.get('/admins/:id', AdminController.show);
routes.put('/admins/:id', AdminController.update);
routes.delete('/admins/:id', AdminController.delete);

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', upload.single('image'), UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.post('/sliders', upload.single('image'), SliderController.store);
routes.get('/sliders/:id', SliderController.show);
routes.put('/sliders/:id', upload.single('image'), SliderController.update);
routes.delete('/sliders/:id', SliderController.delete);

routes.post('/categorias', upload.single('image'), CategoriaController.store);
routes.get('/categorias/:id', CategoriaController.show);
routes.put('/categorias/:id', upload.single('image'), CategoriaController.update);
routes.delete('/categorias/:id', CategoriaController.delete);

routes.post('/depoimentos', upload.single('image'), DepoimentoController.store);
routes.get('/depoimentos/:id', DepoimentoController.show);
routes.put('/depoimentos/:id', upload.single('image'), DepoimentoController.update);
routes.delete('/depoimentos/:id', DepoimentoController.delete);

routes.get('/emails', EmailController.index);
routes.get('/emails/:id', EmailController.show);
routes.put('/emails/:id', EmailController.update);
routes.delete('/emails/:id', EmailController.delete);

routes.post('/idades', IdadeController.store);
routes.get('/idades/:id', IdadeController.show);
routes.put('/idades/:id', IdadeController.update);
routes.delete('/idades/:id', IdadeController.delete);

routes.post('/unidades', UnidadeController.store);
routes.get('/unidades/:id', UnidadeController.show);
routes.put('/unidades/:id', UnidadeController.update);
routes.delete('/unidades/:id', UnidadeController.delete);

routes.get('/registros', RegistroController.index);
routes.post('/registros', RegistroController.store);
routes.get('/registros/:id', RegistroController.show);
routes.put('/registros/:id', RegistroController.update);
routes.delete('/registros/:id', RegistroController.delete);

routes.get('/pelagems', PelagemController.index);
routes.post('/pelagems', PelagemController.store);
routes.get('/pelagems/:id', PelagemController.show);
routes.put('/pelagems/:id', PelagemController.update);
routes.delete('/pelagems/:id', PelagemController.delete);

routes.get('/andrologias', AndrologiaController.index);
routes.post('/andrologias', AndrologiaController.store);
routes.get('/andrologias/:id', AndrologiaController.show);
routes.put('/andrologias/:id', AndrologiaController.update);
routes.delete('/andrologias/:id', AndrologiaController.delete);

routes.get('/pesos', PesoController.index);
routes.post('/pesos', PesoController.store);
routes.get('/pesos/:id', PesoController.show);
routes.put('/pesos/:id', PesoController.update);
routes.delete('/pesos/:id', PesoController.delete);

routes.get('/litros', LitroController.index);
routes.post('/litros', LitroController.store);
routes.get('/litros/:id', LitroController.show);
routes.put('/litros/:id', LitroController.update);
routes.delete('/litros/:id', LitroController.delete);

module.exports = routes;
