// Principais importações
const Agendamento = require("../database/agendamento");
const { Router } = require("express");
const Joi = require("joi");

const router = Router();

// Validação
const schema = Joi.object({
    dataAgendada: Joi.date().required(),
    realizada: Joi.boolean().required(),
    petId: Joi.number().required(),
    servicoId: Joi.number().required(),
});

// Definição de Rotas


// Lista todos os serviços
//////////////////////////////////////////////////////// Listar todos Agendamentos
router.get("/agendamentos", async (req, res) => {
    
    try {
        const listaAgendamento = await Agendamento.findAll();
        res.json(listaAgendamento);
    } catch(error) {
        res.status(500).json({ message: "Um erro aconteceu." });
    }
});

//////////////////////////////////////////////////////// Listar Agendamento por id
router.get("/agendamentos/:id", async (req, res) => {
    const { id } = req.params;

    const agendamento = await Agendamento.findByPk(id);
    if (agendamento) {
      res.json(agendamento);
    } else {
      res.status(404).json({ message: "Agendamentos não encontrado." });
    }
});

//////////////////////////////////////////////////////// Adicionar Agendamento
router.post("/agendamentos", async (req, res) => {
    const { dataAgendada, realizada, petId, servicoId } = req.body;
    
    try {
        await schema.validateAsync(req.body);
        
        const novoAgendamento= await Agendamento.create({
            dataAgendada,
            realizada,
            petId,
            servicoId
        }) 
        res.status(201).json(novoAgendamento);
    } catch(error) {
        console.log(error);
        
        res.status(400).json({ message: "Dados inválidos." });
    }
});

//////////////////////////////////////////////////////// Editar Agendamento
router.put("/agendamentos/:id", async (req, res) => {
    const { dataAgendada, realizada, petId, servicoId } = req.body;
    const { id } = req.params;

    try {
        await schema.validateAsync(req.body);

        const agendamento = await Agendamento.findOne({ where: { id } });

        if(agendamento) {
            await Agendamento.update({ dataAgendada, realizada, petId, servicoId }, { where: { id } });
            res.status(200).json({ message: "Agendamento atualizado." });
        } else {
            res.status(404).json({ message: "Agendamento não encontrado" });
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: "Um erro aconteceu." });

    }
});

//////////////////////////////////////////////////////// Remove Agendamento
router.delete("/agendamentos/:id", async (req, res) =>{
    const { id } = req.params;
    const agendamento = await Agendamento.findOne({ where: { id } });
    
    try{
        if(agendamento) {
            await agendamento.destroy();
            res.status(200).json({ message: "Agendamento removido." });
        } else {
            res.status(404).json({ message: "Agendamento não encontrado." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Um erro aconteceu." });
    }
});


//////////////////////////////////////////////////////// Remove Todos os Agendamento
router.delete("/agendamentos", async (req, res) => {
    try{
        const removeAgendamento = await Agendamento.destroy({
            where: {},
        });
    res.status(200).json({ message: "Todos os agendamentos foram removidos." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Um erro aconteceu." });
      }
});




module.exports = router;


