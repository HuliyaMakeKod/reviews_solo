const React = require('react');

const Layout = require('./Layout');

module.exports = function Profile({
  name, login, email, reviews,
}) {
  return (
    <Layout login={login}>
      <script defer src="/js/delete.js" />
      <link rel="stylesheet" href="/stylesheets/profile.css" />
      <div className="profile" id="profile">
        <div className="profile-header">
          <img src="/pic/book.jpeg" alt="User Photo" className="user-photo" />
          <h1 className="user-name">
            Логин:
            {' '}
            {login}
          </h1>
          <p className="user-name">
            Имя:
            {' '}
            {name}
          </p>
          <p className="user-email">
            Почта:
            {' '}
            {email}
          </p>
        </div>
        <div className="profile-posts">
          <h2 className="section-title">Мои отзывы:</h2>
          {reviews.map((rev) => (
            <div className="your_reviews" key={rev.id} id={rev.id}>
              <li className="reviews">
                <li className="title">{rev.title}</li>
                <li className="type">
                  {rev.type}
                  {' '}
                </li>
                <ul className="posts-list">
                  <li className="entry-link"><a className="oneCard" href={`show_one_review/${rev.id}`}>Перейти к отзыву</a></li>
                  <li className="entry-link"><a className="edit" href={`profile/change_review_form/${rev.id}`}>Редактировать</a></li>
                  <li className="entry-link"><a className="delete" href={`delete_review/${rev.id}`}>Удалить</a></li>
                </ul>
              </li>
            </div>
          ))}
        </div>
        <div className="profile-controls">
          <button className="btn btn-change-photo">Изменить информацию о себе</button>
        </div>
      </div>
    </Layout>
  );
};
