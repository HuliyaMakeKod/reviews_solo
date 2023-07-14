const React = require('react');

const Layout = require('./Layout');

module.exports = function Registr({ props }) {
  return (
    <Layout>
      <div className="form-signin w-100 m-auto">
        <h2>Регистрация</h2>
        <link rel="stylesheet" href="/stylesheets/registr.css" />
        <script defer src="/js/registr.js" />
        <form action="/registr" method="POST" id="regForm" name="regForm">
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Имя</label>
            <input type="name" name="name" className="form-control" id="exampleInputName" aria-describedby="namelHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputLogin" className="form-label">Логин*</label>
            <input type="login" name="login" className="form-control" id="exampleInputLogin" aria-describedby="loginlHelp" />
          </div>
          <label htmlFor="exampleInputEmail1" className="form-label">Адрес электронной почты*</label>
          <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">Мы никогда никому не передадим вашу электронную почту.</div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Пароль*</label>
            <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputCountry" className="form-label">Страна</label>
            <input type="country" name="country" className="form-control" id="exampleInputCountry" aria-describedby="CountrylHelp" />
          </div>
          <button type="submit" className="btn btn-primary">Готово</button>
        </form>
      </div>
    </Layout>
  );
};
