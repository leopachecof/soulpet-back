const Cliente = require("../database/cliente");
const Endereco = require("../database/endereco");

const { Router } = require("express");
const Pedidos = require("../database/pedido");
const Produto = require("../database/produto");

// Criar o grupo de rotas (/clientes)
const router = Router();

// Definição de rotas

// Listar todos os pedidos

router.get("/pedidos", async (req, res) => {
    const listaPedidos = await Pedidos.findAll({
        include: [Cliente, Produto],
    });
    res.json(listaPedidos);
});

// Listar um pedido por id
router.get("/pedidos/:id", async (req, res) => {
    const pedido = await Pedidos.findOne({
        where: { pedidoId: req.params.id },
        include: [Cliente, Produto],
    });
    if (pedido) {
        res.json(pedido);
    } else {
        res.status(404).json({ message: "Pedido por ID não encontrado." });
    }
});

// Listar um pedido baseado no Id de um produto
router.get("/pedidos/produtos/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const produtoCliente = await Pedidos.findAll({
            include: [
                {
                    model: Produto,
                    where: { id: id },
                },
                {
                    model: Cliente,
                },
            ],
        });
        if (produtoCliente) {
            res.status(201).json(produtoCliente);
        } else {
            res.status(404).json({
                message: "O pedido por ID do produto não foi encontrado",
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Um erro aconteceu." });
    }
});

// Listar pedidos por ID do cliente
router.get("/pedidos/clientes/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const produtoCliente = await Pedidos.findAll({
            include: [
                {
                    model: Cliente,
                    where: { id: id },
                },
                {
                    model: Produto,
                },
            ],
        });
        if (produtoCliente) {
            res.status(201).json(produtoCliente);
        } else {
            res.status(404).json({
                message: "O pedido por ID do produto não foi encontrado",
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Um erro aconteceu." });
    }
});

// Adicionar um pedido

router.post("/pedidos", async (req, res) => {
    const { pedidoId, quantidade, clienteId, produtoId } = req.body;
    try {
        const novoPedido = await Pedidos.create(
            { pedidoId, quantidade, clienteId, produtoId },
            { includes: [Cliente, Produto] }
        );
        res.status(201).json(novoPedido);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Um erro aconteceu." });
    }
});

// Atualizar os dados de um pedido

router.put("/pedidos/:id", async (req, res) => {
    const { pedidoId, quantidade } = req.body;
    const pedido = await Pedidos.findByPk(req.params.id);

    try {
        if (pedido) {
            const atualizarPedido = await Pedidos.update(
                { pedidoId, quantidade },
                { where: { pedidoId: req.params.id } }
            );
            res.status(201).json(atualizarPedido);
        } else {
            res.status(404).json({ message: "Pedido não encontrado" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Um erro aconteceu." });
    }
});

// Deletar um pedido por ID

router.delete("/pedidos/:id", async (req, res) => {
    try {
        const pedido = await Pedidos.findByPk(req.params.id);
        if (pedido) {
            await Pedidos.destroy({ where: { pedidoId: req.params.id } });
            res.json({ message: "Pedido removido com sucesso." });
        } else {
            res.status(404).json({ message: "Pedido não encontrado." });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Um erro aconteceu." });
    }
});

// Deletar todos os pedidos

router.delete("/pedidos-all", async (req, res) => {
    try {
        await Pedidos.destroy({ truncate: true });
        res.json({ message: "Todos os pedidos foram removidos." });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Um erro aconteceu." });
    }
});

// Deletar pedido baseado no ID do cliente

router.delete("/pedidos/cliente/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const pedidoPorCliente = await Pedidos.findAll({
            include: [
                {
                    model: Cliente,
                    where: { id: id },
                },
                {
                    model: Produto,
                },
            ],
        });
        if (pedidoPorCliente) {
            await Pedidos.destroy({ where: { clienteId: req.params.id } });
            res.json({ message: "Pedido removido com sucesso." });
        } else {
            res.status(404).json({
                message: "O pedido por ID do cliente não foi encontrado",
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Um erro aconteceu." });
    }
});

// Deletar pedido baseado no ID do Produto

router.delete("/pedidos/produtos/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const pedidoPorProduto = await Pedidos.findAll({
            include: [
                {
                    model: Produto,
                    where: { id: id },
                },
                {
                    model: Cliente,
                },
            ],
        });
        if (pedidoPorProduto) {
            await Pedidos.destroy({ where: { produtoId: req.params.id } });
            res.json({ message: "Pedido removido com sucesso." });
        } else {
            res.status(404).json({
                message: "O pedido por ID do produto não foi encontrado",
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Um erro aconteceu." });
    }
});

module.exports = router;