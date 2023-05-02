const { DataTypes } = require("sequelize");
const { connection } = require("./database");

const Agendamento = connection.define("agendamento", {
    dataAgendada: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    realizada: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
});

 
const Pet = require("./pet");
const Servico = require("./servico");


module.exports = Agendamento;

