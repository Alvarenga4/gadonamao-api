/* eslint-disable eqeqeq */
const Admin = require('../models/Admin');
const mongoose = require('mongoose');

module.exports = {
  async index (req, res) {
    const data = await Admin.find();

    return res.json(data);
  },

  async show (req, res) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'ID Administrador inválido'
      });
    }

    const data = await Admin.findOne({ _id: id });

    return res.json(data);
  },

  async store (req, res) {
    try {
      const {
        name,
        email,
        password
      } = req.body;
      const { filename } = req.file;

      const adm = await Admin.findOne({ email });

      if (adm) {
        return res.status(400).json({ message: 'Email já cadastrado' });
      }

      const data = await Admin.create({
        name,
        email,
        password,
        image: filename
      });

      return res.json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message:
          'Falha no servidor!!! Não foi possivel processar a requisição.',
        error
      });
    }
  },

  async update (req, res) {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
          message: 'ID Administrador inválido'
        });
      }

      const data = await Admin.findOneAndUpdate({ _id: id }, req.body, {
        new: true
      });

      return res.json(data);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({
          message:
            'Falha no servidor!!! Não foi possivel processar a requisição.',
          error
        });
    }
  },

  async delete (req, res) {
    if (!req.headers.id) {
      return res.status(400).json({
        message: 'ID Administrador não informado'
      });
    }

    if (!mongoose.Types.ObjectId.isValid(req.headers.id)) {
      return res.status(400).json({
        message: 'ID Administrador inválido'
      });
    }

    const adm = await Admin.findById(req.headers.id);

    if (!adm) {
      return res.status(404).json({
        message: 'Administrador não encontrado'
      });
    }

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'ID Administrador inválido'
      });
    }

    if (adm._id == id) {
      return res.status(401).json({
        message: 'Nao é permitido excluir o usuário que esta logado no sistema'
      });
    }

    await Admin.deleteOne({ _id: id });

    return res.json({ message: 'Administrador excluido com sucesso' });
  }
};
