const React = require('react');

function Navbar({ login }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">I'mho</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {login ? (
              <>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/newReview">Новый отзыв</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/profile">Профиль</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/logout">Выйти</a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/registr">Зарегистрироваться</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/login">Войти</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

module.exports = Navbar;
