const { DataTypes } = require("sequelize");
const { connection } = require("./database");

const Agendamento = connection.define("agendamento", {
    petId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    servicoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    dataAgendada: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    }

});

module.exports = Agendamento;

