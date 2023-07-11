require('dotenv').config();
require('@babel/register');

const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const { sequelize } = require('./db/models');
const FileStore = require('session-file-store')(session);

const startRouter = require('./src/routes/index');
const registrRouter = require('./src/routes/registr');
const loginRouter = require('./src/routes/login');
const mainRouter = require('./src/routes/main')
const { secureRoute } = require('./src/lib/middleweres/common');

const app = express();
const { PORT } = process.env;

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Подключение к базе данных выполнено успешно!');
  } catch (error) {
    console.error('Подключение к базе данных отсутствует!', error);
  }
};
testConnection();

const sessionConfig = {
  name: 'RaccoonsCookie',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Секретное слово',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 9999999,
    httpOnly: true,
  },
};

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sessionConfig));

// app.use(secureRoute)

app.use('/', startRouter);
app.use('/registr', registrRouter);
app.use('/login', loginRouter);
app.use('/main', mainRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
