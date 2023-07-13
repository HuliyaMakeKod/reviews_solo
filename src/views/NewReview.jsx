const React = require('react');

const Layout = require('./Layout');

module.exports = function NewReview({}) {
  return (
    <Layout>
      <link rel="stylesheet" href="/stylesheets/newReview.css" />
      <h1>Поделитесь вашим мнением тут: </h1>

      <main className="form-wrapper" role="main">

        <form method="POST" action="newReview" encType="multipart/form-data" name="newReviewForm">
          <label htmlFor="title_input">*Заголовок:</label>
          <input id="title_input" name="title" type="text" value="Дайте название отзыву" />

          <label htmlFor="fruits">*Тематика:</label>
          <select id="tematic" name="tematic">
            <option value="Красота и здоровье">Красота и здоровье</option>
            <option value="Фильмы и мультики">Фильмы и мультики</option>
            <option value="Книги">Книги</option>
          </select>

          <label htmlFor="discription_input">Описание:</label>
          <input id="discription_input" name="description" type="text" value="Кратко укажите на суть отзыва" />

          <label htmlFor="type_input">*Детали:</label>
          <input id="type_input" name="type" type="text" value="О чем именно вы хотите поделиться" />

          <label htmlFor="pic_input">Фото:</label>
          <input id="pic_input" type="file" name="pic" value="Прикрепите фото" />

          <label htmlFor="text_input">*Текст отзыва:</label>
          <input id="text_input" name="text" type="text" value="Поделитесь вашим мнением подробнее" />

          <button type="submit" className="button">Поделиться мнением</button>
        </form>
      </main>
    </Layout>
  );
};
