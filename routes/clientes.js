const Cliente = require("../database/cliente");
const Endereco = require("../database/endereco");
const Pet = require("../database/pet");
const docPDF = require("pdfkit");

const { Router } = require("express");

// Criar o grupo de rotas (/clientes)
const router = Router();

// Definição de rotas
// Lista todos os clientes
router.get("/clientes", async (req, res) => {
  // SELECT * FROM clientes;
  const listaClientes = await Cliente.findAll();
  res.json(listaClientes);
});

//Buscar relatório dos clientes em pdf

router.get("/clientes/relatorio", async (req, res) => {
  try {
    const clientes = await Cliente.findAll({
      include: [Pet],
    });

    const doc = new docPDF();
    doc.pipe(res);
    doc
      .fontSize(16)
      .text("Relatório de clientes", { align: "center" })
      .moveDown();

    clientes.forEach((cliente) => {
      doc
        .fontSize(12)
        .text(
          `Nome: ${cliente.nome} - Email: ${cliente.email} - Telefone: ${cliente.telefone}`,
          { align: "justify" }
        )
        .moveDown()
        ;

      doc
        .fontSize(12)
        .text(`Quantidade de pets:${cliente.pets.length}`, { align: "justify" })
        .moveDown();
    });
    doc.end()
  } catch(error) {
    res.status(500).send('Erro ao gerar relatório de clientes.')
  }
});

// lista todos os pets que pertencem a um Cliente
router.get("/clientes/:clienteId/pets", async (req, res) => {
  const { clienteId } = req.params;

  const ClientePet = await Pet.findAll({ where: { clienteId: clienteId } });
  if (ClientePet) {
    res.json(ClientePet);
  } else {
    res.status(404).json({ message: "Cliente não encontrado." });
  }
});

// lista o endereço que pertencem a um Cliente
router.get("/clientes/:clienteId/endereco", async (req, res) => {
  const { clienteId } = req.params;

  const clienteEnd = await Endereco.findOne({
    where: { clienteId: clienteId },
  });

  if (clienteEnd) {
    res.json(clienteEnd);
  } else {
    res.status(404).json({ message: "Endereço de usuário não encontrado." });
  }
});

// lista um determinado Cliente
router.get("/clientes/:id", async (req, res) => {
  const cliente = await Cliente.findOne({where: { id: req.params.id }, include: [Endereco], // trás junto os dados de endereço
  });
  if (cliente) {
    res.json(cliente);
  } else {
    res.status(404).json({ message: "Usuário não encontrado." });
  }
});

// Adiciona cliente

router.post("/clientes", async (req, res) => {
  // Coletar os dados do req.body
  const { nome, email, telefone, endereco } = req.body;

  try {
    // Dentro de 'novo' estará o o objeto criado
    const novo = await Cliente.create(
      { nome, email, telefone, endereco },
      { include: [Endereco] }
    );

    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ message: "Um erro aconteceu." });
  }
});

// atualizar um cliente
router.put("/clientes/:id", async (req, res) => {
  // obter dados do corpo da requisão
  const { nome, email, telefone, endereco } = req.body;
  // obter identificação do cliente pelos parametros da rota
  const { id } = req.params;
  try {
    // buscar cliente pelo id passado
    const cliente = await Cliente.findOne({ where: { id } });
    // validar a existência desse cliente no banco de dados
    if (cliente) {
      // validar a existência desse do endereço passdo no corpo da requisição
      if (endereco) {
        await Endereco.update(endereco, { where: { clienteId: id } });
      }
      // atualizar o cliente com nome, email e telefone
      await cliente.update({ nome, email, telefone });
      res.status(200).json({ message: "Cliente editado." });
    } else {
      res.status(404).json({ message: "Cliente não encontrado." });
    }
  } catch (err) {
    res.status(500).json({ message: "Um erro aconteceu." });
  }
});

// excluir um cliente
router.delete("/clientes/:id", async (req, res) => {
  // obter identificação do cliente pela rota
  const { id } = req.params;
  // buscar cliente por id
  const cliente = await Cliente.findOne({ where: { id } });
  try {
    if (cliente) {
      await cliente.destroy();
      res.status(200).json({ message: "Cliente removido." });
    } else {
      res.status(404).json({ message: "Cliente não encontrado." });
    }
  } catch (err) {
    res.status(500).json({ message: "Um erro aconteceu." });
  }
});


module.exports = router;
