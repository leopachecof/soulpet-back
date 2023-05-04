const { DataTypes } = require("sequelize");
const { connection } = require("./database");

const Agendamento = connection.define("agendamento", {
    dataAgendada: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    realizada: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    petId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    servicoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});



module.exports = Agendamento;

