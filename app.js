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
const mainRouter = require('./src/routes/main');
const profileRouter = require('./src/routes/profile');
const logoutRouter = require('./src/routes/logout');
const newReviewRouter = require('./src/routes/newReview');
const beutyRouter = require('./src/routes/beuty');
const cinemaRouter = require('./src/routes/cinema');
const booksRouter = require('./src/routes/books');

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

app.use('/uploads', express.static('uploads'));
app.use('/', startRouter);
app.use('/registr', registrRouter);
app.use('/login', loginRouter);
app.use('/main', mainRouter);
app.use('/profile', profileRouter);
app.use('/logout', logoutRouter);
app.use('/newReview', newReviewRouter);
app.use('/beuty', beutyRouter);
app.use('/cinema', cinemaRouter);
app.use('/books', booksRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
