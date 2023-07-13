const React = require('react');

const Layout = require('./Layout');

module.exports = function Registr({ props }) {
  return (
    <Layout>
      <div className="form-signin w-100 m-auto">
        <h2>Введите данные для входа</h2>
        {/* <script defer src="/js/login.js" /> */}
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
    </Layout>
  );
};
