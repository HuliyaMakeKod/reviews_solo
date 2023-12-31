const React = require('react');

const Layout = require('./Layout');

module.exports = function Registr({ props }) {
  return (
    <Layout>
      <form action="/login" method="POST" id="logForm" name="logForm">
        <link rel="stylesheet" href="/stylesheets/registr.css" />
        <div className="form-signin w-100 m-auto" id="box">
          <h2>Введите данные для входа</h2>
          <form action="/login" method="POST" id="logForm" name="logForm">
            <div className="mb-3">
              <label htmlFor="exampleInputLogin" className="form-label">Логин</label>
              <input type="login" name="login" className="form-control" id="exampleInputLogin" aria-describedby="loginlHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
              <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Зайти</button>
          </form>
        </div>
      </form>
    </Layout>
  );
};
