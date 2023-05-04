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

Pet.hasMany(Agendamento);
Servico.hasMany(Agendamento);

module.exports = Servico;

