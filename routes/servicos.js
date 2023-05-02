// Principais importações
const Servico = require("../database/servico");
const { Router } = require("express");
const Joi = require("joi");

const router = Router();

// Validação
const schema = Joi.object({
    nome: Joi.string().max(130).required(),

    preco: Joi.number().required(),
});

// Definição de Rotas
// Lista todos os serviços
router.get("/servicos", async (req, res) => {
    
    try {
        const listaServicos = await Servico.findAll();
        res.json(listaServicos);
    } catch(error) {
        res.status(500).json({ message: "Um erro aconteceu." });
    }
});

// Lista serviços por id
router.get("/servicos/:id", async (req, res) => {
    const { id } = req.params;

    const servico = await Servico.findByPk(id);
    if (servico) {
      res.json(servico);
    } else {
      res.status(404).json({ message: "Serviço não encontrado." });
    }
});

// Insere novos serviços
router.post("/servicos", async (req, res) => {
    const { nome, preco } = req.body;

    try {
        await schema.validateAsync(req.body);

        const novoServico = await Servico.create({
            nome,
            preco,
    }) 
        res.status(201).json(novoServico);
    } catch(error) {
        console.log(error);

        res.status(400).json({ message: "Dados inválidos." });
    }
});

// Atualiza serviços 
router.put("/servicos/:id", async (req, res) => {
    const { nome, preco } = req.body;
    const { id } = req.params;

    try {
        await schema.validateAsync(req.body);

        const servico = await Servico.findOne({ where: { id } });

        if(servico) {
            await Servico.update({ nome, preco}, { where: { id } });
            res.status(200).json({ message: "Serviço atualizado." });
        } else {
            res.status(404).json({ message: "Serviço não encontrado" });
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: "Um erro aconteceu." });

    }
});

// Remove um serviço por id
router.delete("/servicos/:id", async (req, res) =>{
    const { id } = req.params;
    const servico = await Servico.findOne({ where: { id } });
    
    try{
        if(servico) {
            await servico.destroy();
            res.status(200).json({ message: "Serviço removido." });
        } else {
            res.status(404).json({ message: "Serviço não encontrado." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Um erro aconteceu." });
      }
});

// Remove todos os serviços
router.delete("/servicos", async (req, res) => {
    try{
        const removeServico = await Servico.destroy({
            where: {},
        });
    res.status(200).json({ message: "Todos os serviços foram removidos." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Um erro aconteceu." });
      }
});

module.exports = router;


