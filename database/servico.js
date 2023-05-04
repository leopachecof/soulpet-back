// Model de Serviços
const { DataTypes } = require("sequelize");
const { connection } = require("./database");

const Servico = connection.define("servico", {
    nome: {
        type: DataTypes.STRING(130),
        allowNull: false,
    },
    preco: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
    }
});


const Pet = require("./pet");
const Agendamento = require("./agendamento");
const Cliente = require("./cliente");

Pet.hasMany(Agendamento);
Servico.hasMany(Agendamento);
Cliente.hasMany(Agendamento);

Agendamento.belongsTo(Servico);
Agendamento.belongsTo(Pet)
Agendamento.belongsTo(Cliente)


module.exports = Servico;

