const React = require('react');

const Layout = require('./Layout');

module.exports = function Profile({ name, login, email, reviews}) {
  return (
    <Layout login={login}>
          <link rel="stylesheet" href="/stylesheets/profile.css" />
      <div className="profile">
        <div className="profile-header">
          <img src="/pic/book.jpeg" alt="User Photo" className="user-photo" />
          <h1 className="user-name">Логин: {login}</h1>
          <p className="user-name">Имя: {name}</p>
          <p className="user-email">Почта: {email}</p>
        </div>
        <div className="profile-posts">
          <h2 className="section-title">Мои отзывы:</h2>
          {reviews.map((rev) => (
            <li className="reviews" key={rev.id} id={rev.id}>
              <span className="title">{rev.title}</span>
              <span className="type">{rev.type}</span>
          <ul className="posts-list">
          <li className="entry-link"><a className="oneCard" href={`show-one-entry/${rev.id}`}>Перейти к отзыву</a></li>
                <li className="entry-link"><a className="edit" href={`edit-one-entry-form/${rev.id}`}>Редактировать</a></li>
                <li className="entry-link"><a className="delete" href={`none-entry/${rev.id}`}>Удалить</a></li>
          </ul>
          </li>
          ))}
        </div>
        <div className="profile-controls">
          <button className="btn btn-change-photo">Изменить информацию о себе</button>
        </div>
      </div>
    </Layout>
  );
};
