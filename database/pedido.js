const { DataTypes } = require("sequelize");
const { connection } = require("./database");
const Cliente = require("./cliente");
const Produto = require("./produto");

const Pedidos = connection.define("pedidos", {
    pedidoId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
});

// Associação Cliente-Pedido: 1:N
    Cliente.hasMany(Pedidos, {
        foreignKey: 'clienteId', // A foreign key deve ser em relação à tabela pai, que no caso é a tabela Cliente
        onDelete: 'CASCADE'
    });
    Pedidos.belongsTo(Cliente);

// Associação Produto-Pedido: 1:N

    Produto.hasMany(Pedidos, {
        foreignKey: 'produtoId', // Aqui devemos voltar a foreign key para produtoId, para evitar o mesmo erro que aconteceu com a tabela de clientes
        onDelete: 'CASCADE'
    });
    Pedidos.belongsTo(Produto);

module.exports = Pedidos;