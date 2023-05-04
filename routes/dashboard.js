const Cliente = require("../database/cliente");
const Pet = require("../database/pet");
const Produto = require("../database/produto");
const Servico = require("../database/servico");
const Agendamento = require("../database/agendamento");

const { Router } = require("express");
const router = Router();

router.get("/dashboard", async (req, res) => {
  const countClientes = await Cliente.count();

  const countPets = await Pet.count();
  const countProdutos = await Produto.count();
  const countServicos = await Servico.count();
  const countAgendamentos = await Agendamento.count();

  const dashboard = {
    countClientes,
    countPets,
    countProdutos,
    countServicos,
    countAgendamentos,
  };

  res.json(dashboard);
});

module.exports = router;
