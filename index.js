// Importações principais e variáveis de ambiente
const cors = require("cors");
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const Servico = require("./database/servico");
const Produto = require("./database/produto");
const Agendamento = require("./database/agendamento");

// Configuração do App
const app = express();
app.use(express.json()); // Possibilitar transitar dados usando JSON
app.use(morgan("dev"));

// Configuração de Middleware
// helmet
const helmet = require("helmet");
// app.use(helmet());
// app.disable("x-powered-by");
// Esta função comentada acima de helmet ela conflita com a geração de relatório em formato PDF. Por isso deichamos ela comentada.
// express-session -> cookies de segurança
const session = require("express-session");
app.use(session({
  secret : 's3Cur3',
  name : 'sessionId',
}));
// Compression (Gzip) -> aumento de velocidade da app
const compression = require('compression');
app.use(compression())


// Configurações de acesso
app.use(cors({ origin: "http://localhost:3000" }));

// Configuração do Banco de Dados
const { connection, authenticate } = require("./database/database");
authenticate(connection); // efetivar a conexão

// Definição de Rotas
const rotasClientes = require("./routes/clientes");
const rotasPets = require("./routes/pets");
const rotasServicos = require("./routes/servicos");
const rotasProdutos = require("./routes/produtos");
const healthcheck = require("./routes/healthchecker");
const rotasPedidos = require("./routes/pedidos");
const rotasAgendamentos = require("./routes/agendamentos");
const rotaDashboard = require("./routes/dashboard");

// Juntar ao app as rotas dos arquivos
app.use(rotasClientes);
app.use(rotasPets);
app.use(rotasServicos);
app.use(rotasProdutos);
app.use('/healthcheck', require('./routes/healthchecker'));
app.use(rotasPedidos);
app.use(rotasAgendamentos);
app.use(rotaDashboard);


// Escuta de eventos (listen)
app.listen(3001, () => {
  // Gerar as tabelas a partir do model
  // Force = apaga tudo e recria as tabelas
  connection.sync();
  // connection.sync({ force: true });
  console.log("Servidor rodando em http://localhost:3001/");
});
