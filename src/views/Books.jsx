const React = require('react');

const Layout = require('./Layout');

module.exports = function Books({ login, reviews }) {
  return (
    <Layout login={login}>
      <link rel="stylesheet" href="/stylesheets/main.css" />
      <div className="nav-scroller py-1 mb-3 border-bottom">
        <nav className="nav nav-underline justify-content-between">
          <a className="nav-item nav-link link-body-emphasis active" href="/beuty">Красота и здоровье</a>
          <a className="nav-item nav-link link-body-emphasis" href="/cinema">Кино и мультфильмы</a>
          <a className="nav-item nav-link link-body-emphasis" href="/books">Книги</a>
        </nav>
      </div>
      <ul id="entries" className="entries">
        {reviews.map((review) => (
          <div className='review'>
          <li className="entry" key={review.id} id={review.id}>
            <li className="singer">{review.title}</li>
            <li className="song-title">{review.description}</li>
            <li><img style={{ height: '300px'}} className="pic" src={review.pic} alt="" /></li>
            <ul className="entry-links">
              <li className="entry-link"><a className="oneCard" href={`main/show_review/${review.id}`}>Подробнее</a></li>
            </ul>
          </li>
          </div>
        ))}
      </ul>
    </Layout>
  );
};