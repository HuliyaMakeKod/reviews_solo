const React = require('react');
const Layout = require('./Layout');

module.exports = function ShowEntry({ login, review }) {
  return (
    <Layout login="login">
      <link rel="stylesheet" href="/stylesheets/showReview.css" />

      <div className="main">
        <h1 className="title">{review.title}</h1>
        <div className="review-info">
          <div className="info-item">
            <span className="label">Тематика:</span>
            <span className="value">{review.tematic}</span>
          </div>

          <div className="info-item">
            <span className="label">Описание:</span>
            <span className="value">{review.description}</span>
          </div>

          <div className="info-item">
            <span className="label">Тип:</span>
            <span className="value">{review.type}</span>
          </div>

          <div className="info-item">
            <span className="label">Картинка:</span>
            <img className="pic" src={review.pic} alt="" />
          </div>

          <div className="info-item">
            <span className="label">Текст:</span>
            <span className="value">{review.text}</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};
