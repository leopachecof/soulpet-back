const { Router } = require("express");
const Produto = require("../database/produto");
const Joi = require("joi");
const { Sequelize, Op } = require("sequelize");

// Criar o grupo de rotas (/clientes)
const router = Router();

// Validação

const categoriasPermitidas = ["Higiene", "Brinquedos", "Conforto"];

const schema = Joi.object({
  nome: Joi.string().min(3).max(150).required(),

  preco: Joi.number().precision(2).required(),

  descricao: Joi.string().min(5).max(250).required(),

  desconto: Joi.number().min(0).max(100).required(),

  dataDesconto: Joi.date().iso().greater("now").required(),

  categoria: Joi.string()
    .lowercase()
    .valid(...categoriasPermitidas.map((categoria) => categoria.toLowerCase()))
    .required(),
});

// Buscar produtos geral e por filtragem

router.get("/produtos", async (req, res) => {
  const filter = {};

  //Buscar apenas X categoria

  if (req.query.categoria) {
    filter.categoria = { [Op.like]: `%${req.query.categoria}%` };
  }

  //Buscar apenas X nome

  if (req.query.nome) {
    filter.nome = { [Op.like]: `%${req.query.nome}%` };
  }

  const produtos = await Produto.findAll({
    where: filter,
  });

  res.json(produtos);
});

//Procurar produto por id
router.get("/produtos/:id", async (req, res) => {
  const { id } = req.params;

  const produto = await Produto.findByPk(id);

  if (produto) {
    res.json(produto);
  } else {
    res.status(404).json({ message: "Produto não encontrado" });
  }
});

//Adicionar produto

router.post("/produtos", async (req, res) => {
  const { nome, preco, descricao, desconto, dataDesconto, categoria } =
    req.body;

  try {
    await schema.validateAsync(req.body); //validação das informações passadas

    const novo = await Produto.create({
      nome,
      preco,
      descricao,
      desconto,
      dataDesconto,
      categoria,
    });
    res.status(201).json(novo);
  } catch (error) {
    console.log(error);

    res.status(400).json({ message: "Dados inválidos." });
  }
});

//Excluir produto

router.delete("/produtos/:id", async (req, res) => {
  const { id } = req.params;

  const produto = await Produto.findOne({ where: { id } });

  try {
    if (produto) {
      await produto.destroy();
      res.status(200).json({ message: "Cliente Removido" });
    } else {
      res.status(404).json({ message: "Produto não encontrado" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Um erro aconteceu." });
  }
});

//Alterar produto

router.put("/produtos/:id", async (req, res) => {
  const { id } = req.params;

  const { nome, preco, descricao, desconto, dataDesconto, categoria } =
    req.body;


  try {

    await schema.validateAsync(req.body);

    const produto = await Produto.findOne({ where: { id } });


    if (produto) {
      await produto.update({
        nome,
        preco,
        descricao,
        desconto,
        dataDesconto,
        categoria,
      });

      res.status(200).json({ message: " Produto editado." });

    } else {
      res.status(404).json({ message: "Produto não encontrado." });

    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Dados inválidos" })
  }
});

module.exports = router;
