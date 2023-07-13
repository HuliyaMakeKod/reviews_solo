const React = require('react');

const Layout = require('./Layout');

module.exports = function ChangeReview({
  review
}) {
  return (
    <Layout>
      <link rel="stylesheet" href="/stylesheets/newReview.css" />
      <script defer src="/js/changeReview.js" />
      <h1>Внесите изменения: </h1>

      <main className="form-wrapper" role="main">

        <form method="PUT" name="ChangeReviewForm" id={review.id}>
          <label htmlFor="title_input">*Заголовок:</label>
          <input id="title_input" name="change_title" type="text" value={review.title} />

          <label htmlFor="tematic_input">*Тематика:</label>
          <input id="tematic_input" name="change_tematic" type="text" value={review.tematic} />

          <label htmlFor="discription_input">Описание:</label>
          <input id="discription_input" name="change_description" type="text" value={review.description} />

          <label htmlFor="type_input">*Детали:</label>
          <input id="type_input" name="change_type" type="text" value={review.type} />

          <label htmlFor="pic_input">Фото:</label>
          <input id="pic_input" type="file" name="pic" value="Прикрепите фото" />

          <label htmlFor="text_input">*Текст отзыва:</label>
          <input id="text_input" name="change_text" type="text" value={review.text} />

          <input type="submit" value="Поделиться мнением" className="button" />
        </form>
      </main>
    </Layout>
  );
};
