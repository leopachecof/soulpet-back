const { DataTypes } = require("sequelize");
const { connection } = require("./database");

const Agendamento = connection.define("agendamento", {
    dataAgendada: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    realizada: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    petId: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    servicoId: {
        type: DataTypes.NUMBER,
        allowNull: false,
    }
});



module.exports = Agendamento;

