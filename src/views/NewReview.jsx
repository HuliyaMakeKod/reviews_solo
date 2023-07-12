const React = require('react');

const Layout = require('./Layout');

module.exports = function NewReview({}) {
  return (
    <Layout>
      <link rel="stylesheet" href="/stylesheets/newReview.css" />
      <script defer src="/js/newReview.js" />
      <h1>Поделитесь вашим мнением тут: </h1>

      <main className="form-wrapper" role="main">

        <form method="post" action="newReview" name="newReviewForm">
          <label htmlFor="title_input">*Заголовок:</label>
          <input id="title_input" name="title" type="text" value="Дайте название отзыву" />

          <label htmlFor="tematic_input">*Тематика:</label>
          <input id="tematic_input" name="tematic" type="text" value="О чем будет ваш отзыв" />

          <label htmlFor="discription_input">Описание:</label>
          <input id="discription_input" name="description" type="text" value="Кратко укажите на суть отзыва" />

          <label htmlFor="type_input">*Детали:</label>
          <input id="type_input" name="type" type="text" value="О чем именно вы хотите поделиться" />

          <label htmlFor="pic_input">Фото:</label>
          <input id="pic_input" name="pic" type="text" value="Прикрепите фото" />

          <label htmlFor="text_input">*Текст отзыва:</label>
          <input id="text_input" name="text" type="text" value="Поделитесь вашим мнением подробнее" />

          <input type="submit" value="Поделиться мнением" className="button" />
        </form>
      </main>
    </Layout>
  );
};
